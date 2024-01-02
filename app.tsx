import fs from "fs";
import esbuild from "esbuild";
import React from "react";
import { renderToString } from "react-dom/server";
import Routes from "./src/route";
import { IsFileExists } from "./libs";

const main = async () => {
  // 解析路由
  Routes.map(async (route) => {
    await createPage(route.page, route.props);
  });
};

/**
 * ssg生成html页面
 * @param pack 页面目录名 (src下的)
 * @param props 需要传入的预处理数据
 */
const createPage = async (pack, props) => {
  // 模块页面
  const Page = require("./src/" + pack + "/Page.tsx");
  // 获取服务端数据，并将其注入到props的serData中。
  if (IsFileExists("./src/" + pack + "/SerData.ts")) {
    const SerData = require("./src/" + pack + "/SerData.ts").default;
    props.serData = SerData;
  }
  // 服务端渲染html
  const html = renderToString(<Page.default {...props} />);
  // ssg部分生成index.html
  const template = fs.readFileSync("./public/index.html", "utf-8");
  // 预渲染
  const prerendered_page = template
    .replace("<%title%>", props.title) //seo模板
    .replace("<%ssg_props%>", JSON.stringify(props)) //react赋值
    .replace("<%html%>", html) //渲染后的html
    .replace("<%client_js%>", pack); //js
  // 生成index.html页面
  fs.writeFileSync("./" + pack + ".html", prerendered_page);
  // 生成js
  esbuild.buildSync({
    entryPoints: ["./src/" + pack + "/Js.ts"],
    bundle: true,
    minify: true,
    outfile: "./js/" + pack + ".js",
  });
};

// 执行
main();
