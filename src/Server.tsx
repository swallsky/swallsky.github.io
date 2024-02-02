import React from "react";
import { renderToString } from "react-dom/server";
import config from "../book.config";
import Html from "./Html";

/**
 * 返回服务端的html
 * @param Page
 * @param props
 * @param jspath
 * @returns
 */
const Server = (Page: any, props: any, jspath: string) => {
  if (Page) {
    return renderToString(
      <Html title={props.title} jsPath={jspath} rootId={config.page.domRootId}>
        <Page.default {...props} />
      </Html>
    );
  } else {
    return "";
  }
};

export default Server;
