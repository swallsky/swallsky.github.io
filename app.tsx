import ssg from "./core/ssg.tsx";
import Routes from "./src/route.ts";

const main = async () => {
  // 解析路由
  Routes.map(async (route) => {
    await ssg.renderHtml(route.page, route.props);
  });
};

// 执行
main();
