import React from "react";
import { renderToString } from "react-dom/server";
import Page from "./pages/Index";

// 生成服务端html代码 ssg模式
export default (props) => {
  return renderToString(<Page {...props} />);
};
