import ssg from "./core/ssg.ts";
import Routes from "./src/route.ts";

const main = async () => {
  // 解析路由
  await ssg.route(Routes);
};

// 执行
main();
