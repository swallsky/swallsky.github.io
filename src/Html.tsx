import React from "react";

// body样式
const bodyStyle:React.CSSProperties = {
    margin: 0,
    padding: 0
}

interface Props {
    children:any; // 服务端组件
    title: string; // 页面标题
    rootId: string; // 组件挂载id
    jsPath: string; // 客户js路径
}

function Html(props:Props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
