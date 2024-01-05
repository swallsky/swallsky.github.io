import React from "react";
import { renderToString } from "react-dom/server";
import config from "../book.config";
import path from "path";
import fs from "fs";
import { IsFileExists } from "./utils";
import esbuild from "esbuild";

class SSG {
  // src目录
  private srcDir: string;
  // 模板文件
  private templateFile: string;
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
    this.templateFile = path.join(__dirname, "../public/index.html");
    this.buildDir = path.join(__dirname, "../", config.buildDir);
    if (!fs.existsSync(this.buildDir)) fs.mkdirSync(this.buildDir); //创建编译后的目录
    this.cacheDir = path.join(__dirname, "../", config.cacheDir);
    if (!fs.existsSync(this.cacheDir)) fs.mkdirSync(this.cacheDir); //创建缓存的目录
  }
  /**
   * 路由
   * @param r
   */
  public route(r: any) {
    console.log(r);
  }
  /**
   * 返回前端页面
   * @param pack
   * @returns
   */
  private getPage(pack: string) {
    this.pageFile = path.join(this.srcDir, pack, config.page.index);
    if (IsFileExists(this.pageFile)) {
      return require(this.pageFile);
    } else {
      console.log("未找到页面:", this.pageFile);
      return false;
    }
  }
  /**
   * 获取服务端数据
   * @param pack
   * @returns
   */
  private getSerData(pack: string) {
    var serFile = path.join(this.srcDir, pack, config.page.serverData);
    if (IsFileExists(serFile)) {
      return require(serFile).default;
    } else {
      return false;
    }
  }
  /**
   * 返回服务器的html
   * @param pack
   * @param props
   */
  public async rootHtml(pack: string, props: any) {
    const Page = this.getPage(pack);
    if (Page) {
      props.serData = this.getSerData(pack);
      return renderToString(<Page.default {...props} />);
    } else {
      return "";
    }
  }
  /**
   * 获取模板数据
   * @returns
   */
  private getTemplate() {
    if (IsFileExists(this.templateFile)) {
      return fs.readFileSync(this.templateFile, "utf-8");
    } else {
      return false;
    }
  }
  /**
   * 创建Js.tsx缓存
   * @param pack
   * @param props
   */
  private createCache(pack:string,props: any) {
    const code = `
import React from "react";
import { hydrateRoot } from "react-dom/client";
import Page from "../../src/${pack}/Page";
var props = ${props};
hydrateRoot(document.getElementById("root"), <Page {...props} />);
    `;
    var packDir = path.join(this.cacheDir, pack);
    if(!fs.existsSync(packDir)) fs.mkdirSync(packDir); //创建页面的目录
    this.jsCacheFile = path.join(this.cacheDir, pack, "Js.tsx"); //前端js的缓存文件
    try {
      fs.writeFileSync(this.jsCacheFile, code);
    } catch (err) {
      console.error(err);
    }
  }
  /**
   * 渲染html
   * @param pack
   * @param props
   */
  public async renderHtml(pack: string, props: any) {
    // ssg部分生成index.html
    const template = this.getTemplate();
    // 获取服务端html
    const html = await this.rootHtml(pack, props);
    if (template) {
      // 预渲染
      const prerendered_page = template
        .replace("<%title%>", props.title) //seo模板
        .replace("<%html%>", html) //渲染后的html
        .replace(
          "<%client_js%>",
          path.join("js", pack + ".js") //客户端的js
        ); //js
      // 生成index.html页面
      fs.writeFileSync(
        path.join(this.buildDir, pack + ".html"),
        prerendered_page
      );
      // 生成js
      this.createCache(pack,JSON.stringify(props));
      // 打包前端js
      esbuild.buildSync({
        entryPoints: [this.jsCacheFile],
        bundle: true,
        minify: true,
        outfile: path.join(this.buildDir, "js", pack + ".js"),
      });
    }
  }
}

export default new SSG();
