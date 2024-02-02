import config from "../book.config";
import path from "path";
import fs from "fs";
import { IsFileExists } from "./utils";
import esbuild from "esbuild";
import ServerHtml from "../src/Server";

// 路由配置接口
export interface RouteCfg {
  page: string; //页面目录
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
  /**
   * 构造函数
   */
  constructor() {
    this.srcDir = path.join(__dirname, "../src");
    this.buildDir = path.join(__dirname, "../", config.buildDir);
    if (!fs.existsSync(this.buildDir)) fs.mkdirSync(this.buildDir); //创建编译后的目录
    this.cacheDir = path.join(__dirname, "../", config.cacheDir);
    if (!fs.existsSync(this.cacheDir)) fs.mkdirSync(this.cacheDir); //创建缓存的目录
  }
  /**
   * 路由配置
   * @param R
   */
  public async route(R: RouteCfg[]) {
    R.map(async (route) => {
      await this.renderHtml(route.page, route.props);
    });
  }
  /**
   * 获取服务端数据
   * @param pack
   * @returns
   */
  private async getSerData(pack: string, props: any) {
    var serFile = path.join(this.srcDir, pack, config.page.serverData);
    if (IsFileExists(serFile)) {
      const serverFn = require(serFile).default;
      return await serverFn(props);
    } else {
      return false;
    }
  }
  /**
   * 获取页面文件
   * @param pack
   * @returns
   */
  private getPage(pack: string) {
    this.pageFile = path.join(this.srcDir, pack, config.page.index);
    if (IsFileExists(this.pageFile)) {
      return require(this.pageFile);
    } else {
      return false;
    }
  }
  /**
   * hydrateRoot水合模式的前端js模板
   * @param pack
   * @param props
   * @returns
   */
  private JsTemplate(pack: string, props: any) {
    props = JSON.stringify(props); //将属性对象格式化为json字符串
    return `import React from "react";
      import { hydrateRoot } from "react-dom/client";
      import Page from "../../src/${pack}/Page";
      var props = ${props};
      hydrateRoot(document.getElementById("${config.page.domRootId}"), <Page {...props} />);
    `;
  }
  /**
   * 创建Js.tsx缓存
   * @param pack
   * @param props
   */
  private createCache(pack: string, props: any) {
    const code = this.JsTemplate(pack, props);
    var packDir = path.join(this.cacheDir, pack);
    if (!fs.existsSync(packDir)) fs.mkdirSync(packDir); //创建页面的目录
    this.jsCacheFile = path.join(this.cacheDir, pack, "Js.tsx"); //前端js的缓存文件
    try {
      fs.writeFileSync(this.jsCacheFile, code);
    } catch (err) {
      console.error(err);
    }
  }
  /**
   * 生成html页
   * @param pack
   * @param props
   */
  private createHtml(pack: string, props: any) {
    // 获取服务端html
    const Page = this.getPage(pack);
    const _html = ServerHtml(Page, props, path.join("js", pack + ".js"));
    // 预渲染html页面
    // const prerendered_page = RenderHtml(
    //   roothtml,
    //   path.join("js", pack + ".js"),
    //   props
    // );
    // 生成index.html页面
    fs.writeFileSync(
      path.join(this.buildDir, pack + ".html"),
      _html
    );
  }
  /**
   * 生成html需要的打包好的js
   * @param pack
   * @param props
   */
  private createJs(pack: string, props: any) {
    // 为解决客户端的hydrateRoot而使用的临时缓存的tsx，方便前端打包js文件
    this.createCache(pack, props);
    // 打包前端js
    esbuild.buildSync({
      entryPoints: [this.jsCacheFile],
      bundle: true,
      minify: true,
      outfile: path.join(this.buildDir, "js", pack + ".js"),
    });
  }
  /**
   * 渲染html
   * @param pack
   * @param props
   */
  public async renderHtml(pack: string, props: any) {
    // 获取服务端数据 server data
    props.serData = await this.getSerData(pack, props);
    // 生成html页
    this.createHtml(pack, props);
    // 生成html对应的js
    this.createJs(pack, props);
  }
}

export default new SSG();
