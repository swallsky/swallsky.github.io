export default {
  buildDir: "docs", // 编译后的目录
  cacheDir: "_cache", //  缓存的目录
  globalJs: "global", // 全局ts文件名
  server: {
    port: 9090, //开发服务的端口
  },
  page: {
    title: "码农魔法书", // 页面的title
    domRootId: "root", // dom的root的id
    index: "Page.tsx", // 模块入口页
    serverData: "SerData.ts", // 在服务端获取数据
  },
};
