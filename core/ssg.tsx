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
  // 编译后的目录
  private buildDir: string;
  /**
   * 构造函数
   */
  constructor() {
    this.srcDir = path.join(__dirname, "../src");
    this.templateFile = path.join(__dirname, "../public/index.html");
    this.buildDir = path.join(__dirname, "../", config.buildDir);
    if(!fs.existsSync(this.buildDir)) fs.mkdirSync(this.buildDir); //创建编译后的目录
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
    var pageFile = path.join(this.srcDir, pack, config.page.index);
    if (IsFileExists(pageFile)) {
      return require(pageFile);
    } else {
      console.log("未找到页面:", pageFile);
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
        .replace("<%ssg_props%>", JSON.stringify(props)) //react赋值
        .replace("<%html%>", html) //渲染后的html
        .replace("<%client_js%>", path.join("js", pack + ".js") //客户端的js
        ); //js
      // 生成index.html页面
      fs.writeFileSync(
        path.join(this.buildDir, pack + ".html"),
        prerendered_page
      );
      // 生成js
      esbuild.buildSync({
        entryPoints: [path.join(this.srcDir, pack, "Js.ts")],
        bundle: true,
        minify: true,
        outfile: path.join(this.buildDir, "js", pack + ".js"),
      });
    }
  }
}

export default new SSG();
