import React from "react";

// body样式
const bodyStyle:React.CSSProperties = {
    margin: 0,
    padding: 0,
    backgroundColor: 'antiquewhite'
}

interface Props {
    children:any; // 服务端组件
    title: string; // 页面标题
    rootId: string; // 组件挂载id
    jsPath: string; // 客户js路径
    cssPath: string; // css路径
}

// html模板
function Html(props:Props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href={props.cssPath} rel="stylesheet" type="text/css" />
        <title>{props.title}</title>
      </head>
      <body style={bodyStyle}>
        <div id={props.rootId}>{props.children}</div>
        <script type="text/javascript" src={props.jsPath}></script>
      </body>
    </html>
  );
}

export default Html;
