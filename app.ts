import ssg from "./core/ssg.ts";
import devServer from "./core/dev.ts";
import Routes from "./src/route.ts";

const main = async () => {
  if (process.env.MODE == "dev") { //开发模式
    devServer();
  }
  // 解析路由
  await ssg.Route(Routes);
};

// 执行
main();
