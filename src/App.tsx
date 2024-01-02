import React from "react";
import { hydrateRoot } from "react-dom/client";
import Page from "./pages/Index";

// 生成客户端
hydrateRoot(
  document.getElementById("root"),
  <Page {...JSON.parse(props)} />
);
