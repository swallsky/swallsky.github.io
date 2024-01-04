export default {
  buildDir: "dist", // 编译后的目录
  page: {
    index: "Page.tsx", // 模块入口页
    serverData: "SerData.ts", // 在服务端获取数据
    js: "Js.ts", // hydrateRoot 客户js入口
  },
};
