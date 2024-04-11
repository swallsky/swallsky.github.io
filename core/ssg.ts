import config from "../book.config";
import path from "path";
import fs from "fs";
import { IsFileExists } from "./utils";
import esbuild from "esbuild";
import ServerHtml from "../src/Server";

// 路由配置接口
export interface RouteCfg {
  page: string; //页面文件名
  source: string; //页面源码
  props: any; //预处理数据
  children?: RouteCfg[];
}

class SSG {
  // src目录
  private srcDir: string;
  // 页面文件
  private pageFile: string;
  // Js.tsx缓存文件名
  private jsCacheFile: string;
  // 编译后的目录
  private buildDir: string;
  // 缓存的目录
  private cacheDir: string;
  // 全局js文件
  private globalJs: string;
  /**
   * 构造函数
   */
  constructor() {
    this.srcDir = path.join(__dirname, "../src");
    this.buildDir = path.join(__dirname, "../", config.buildDir);
    if (!fs.existsSync(this.buildDir)) fs.mkdirSync(this.buildDir); //创建编译后的目录
    this.cacheDir = path.join(__dirname, "../", config.cacheDir);
    if (!fs.existsSync(this.cacheDir)) fs.mkdirSync(this.cacheDir); //创建缓存的目录
    this.globalJs = path.join(this.srcDir, config.globalJs+".ts");
  }
  /**
   * 路由配置
   * @param R
   */
  public async Route(R: RouteCfg[]) {
    // 生成全局js文件
    await this.BuildGlobalJs();
    // 生成html页面
    R.map(async (route) => {
      await this.BuildPage(route.page,route.source, route.props);
    });
  }
  /**
   * 获取服务端数据
   * @param source  页面源码
   * @param props    预处理数据
   * @returns
   */
  private async getSerData(source: string, props: any) {
    var serFile = path.join(this.srcDir, source, config.page.serverData);
    if (IsFileExists(serFile)) {
      const serverFn = require(serFile).default;
      return await serverFn(props);
    } else {
      return false;
    }
  }
  /**
   * 获取页面文件
   * @param page   页面文件名
   * @returns
   */
  private getPage(page: string) {
    this.pageFile = path.join(this.srcDir, page, config.page.index);
    if (IsFileExists(this.pageFile)) {
      return require(this.pageFile);
    } else {
      return false;
    }
  }
  /**
   * hydrateRoot水合模式的前端js模板
   * @param source  页面源码
   * @param props   预处理数据
   * @returns
   */
  private JsTemplate(source: string, props: any) {
    props = JSON.stringify(props); //将属性对象格式化为json字符串
    return `import React from "react";
      import { hydrateRoot } from "react-dom/client";
      import Page from "../../src/${source}/Page";
      var props = ${props};
      hydrateRoot(document.getElementById("${config.page.domRootId}"), <Page {...props} />);
    `;
  }
  /**
   * 创建Js.tsx缓存
   * @param page  页面文件名
   * @param source 页面源码
   * @param props 预处理数据
   */
  private createCache(page: string, source: string, props: any) {
    const code = this.JsTemplate(source, props);
    var packDir = path.join(this.cacheDir, page);
    if (!fs.existsSync(packDir)) fs.mkdirSync(packDir); //创建页面的目录
    this.jsCacheFile = path.join(this.cacheDir, page, "Js.tsx"); //前端js的缓存文件
    try {
      fs.writeFileSync(this.jsCacheFile, code);
    } catch (err) {
      console.error(err);
    }
  }
  /**
   * 生成html页
   * @param page   页面文件名
   * @param source 页面源码
   * @param props
   */
  private createHtml(page: string, source: string, props: any) {
    // 获取服务端html
    const Page = this.getPage(source);
    // 预渲染html页面
    const _html = ServerHtml(Page, page, props);
    // 生成index.html页面
    fs.writeFileSync(path.join(this.buildDir, page + ".html"), _html);
  }
  /**
   * 生成html需要的打包好的js
   * @param page  页面文件名
   * @param source  页面源码
   * @param props 预处理数据
   */
  private createJs(page: string, source: string, props: any) {
    // 为解决客户端的hydrateRoot而使用的临时缓存的tsx，方便前端打包js文件
    this.createCache(page, source, props);
    // 打包前端js
    esbuild.buildSync({
      entryPoints: [this.jsCacheFile],
      bundle: true,
      minify: true,
      outfile: path.join(this.buildDir, "js", page + ".js"),
    });
  }
  /**
   * 生成页面css
   * @param page 页面文件名
   */
  private createCss(page: string) {
    const cssFile = path.join(this.srcDir, page, "page.css");
    if (IsFileExists(cssFile)) {
      const buildCssFile = path.join(this.buildDir, "css", page + ".css");
      esbuild.buildSync({
        entryPoints: [cssFile],
        bundle: true,
        minify: true,
        outfile: buildCssFile,
      });
    }
  }
  /**
   * 生成页面
   * @param page 页面文件名
   * @param source 页面源码
   * @param props 预处理数据
   */
  public async BuildPage(page: string,source: string, props: any) {
    // 获取服务端数据 server data
    props.serData = await this.getSerData(source, props);
    // 生成html对应的js
    this.createJs(page, source, props);
    // 生成对应的css样式
    this.createCss(page);
    // 生成html页
    this.createHtml(page, source, props);
  }
  /**
   * 生成全局js文件
   * @returns
   */
  public async BuildGlobalJs() {
    esbuild.buildSync({
      entryPoints: [this.globalJs],
      bundle: true,
      minify: true,
      outfile: path.join(this.buildDir, "js", "global.js"),
    }); // 打包全局js文件
  }
}

export default new SSG();
