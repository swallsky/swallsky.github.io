import React,{ ReactNode } from "react";
import { hydrateRoot } from "react-dom/client";

// 生成客户端
export const Client = (Node: ReactNode)=>{
  hydrateRoot(
    document.getElementById("root"),
    <Node {...JSON.parse(props)} />
  );
}
