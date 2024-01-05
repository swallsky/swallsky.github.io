import { RouteCfg } from "../core/ssg";
// 定义路由
const Route:RouteCfg[] = [
    {
        page: "index",
        props: { title: "首页" }
    },
    {
        page: "markdown",
        props: { title: "MarkDown基础" }
    }
]
export default Route