import React from "react";
import config from "../book.config";
import { renderToString } from "react-dom/server";
/**
 * hydrateRoot水合模式的前端js模板
 * @param pack
 * @param props
 * @returns
 */
export const JsTemplate = (pack: string, props: any) => {
  props = JSON.stringify(props); //将属性对象格式化为json字符串
  return `import React from "react";
import { hydrateRoot } from "react-dom/client";
import Page from "../../src/${pack}/Page";
var props = ${props};
hydrateRoot(document.getElementById("${config.page.domRootId}"), <Page {...props} />);
    `;
};
/**
 *  渲染前端模板
 * @param html
 * @param jspath
 * @param props
 * @returns
 */
export const RenderHtml = (html: string, jspath: string, props: any) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${props?.title}</title>
</head>
<body>
    <div id="${config.page.domRootId}">${html}</div>
    <script type="text/javascript" src="${jspath}"></script>
</body>
</html>
    `;
};

/**
 * 返回服务端的html
 * @param Page 
 * @param props 
 * @returns 
 */
export const RootHtml = (Page: any, props: any) => {
  if (Page) {
    return renderToString(<Page.default {...props} />);
  } else {
    return "";
  }
};
