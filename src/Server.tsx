import React from "react";
import { renderToString } from "react-dom/server";
import config from "../book.config";
import Html from "./Html";

/**
 * 返回服务端的html
 * @param Page  页面组件
 * @param page  页面名称
 * @param props 页面组件的props
 * @returns
 */
const Server = (Page: any, page: string, props:any) => {
  if (Page) {
    return renderToString(
      <Html title={config.page.title+" - "+props.title} globalJs={"js/"+config.globalJs+".js"} jsPath={"js/"+page+".js"} cssPath={"css/"+page+".css"} rootId={config.page.domRootId}>
        <Page.default {...props} />
      </Html>
    );
  } else {
    return "";
  }
};

export default Server;
