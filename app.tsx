import fs from "fs";
import esbuild from "esbuild";
import React, { ReactNode } from "react";
import { renderToString } from "react-dom/server";
import markdown from "markdown-it";
const MD = markdown({ html: true });

const main = async () => {
  await createPage("index",{name: "home page"})
  // home页测试页
  await createPage("home", {name:"hello"});
};

// 获取markdown数据
// const getMarkDown = ()=>{
//     // 获取服务端数据
//     var mdRemote = fs.readFileSync("./markdown/md.md","utf-8");
//     return MD.render(mdRemote.toString());
// }

/**
 * ssg生成html页面
 * @param pack 页面目录名 (src下的)
 * @param props 需要传入的预处理数据
 */
const createPage = async (pack, props) => {
  // 模块页面
  const Page: ReactNode = require("./src/" + pack + "/Page.tsx").default;
  // 服务端渲染html
  const html = renderToString(<Page {...props} />);
  // ssg部分生成index.html
  const template = fs.readFileSync("./public/index.html", "utf-8");
  // 预渲染
  const prerendered_page = template
    .replace("<%title%>", props.name) //seo模板
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
