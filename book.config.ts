export default {
  buildDir: "dist", // 编译后的目录
  cacheDir: "_cache", //  缓存的目录
  server: {
    port: 9090, //开发服务的端口
  },
  page: {
    domRootId: "root", // dom的root的id
    index: "Page.tsx", // 模块入口页
    serverData: "SerData.ts", // 在服务端获取数据
  },
};
