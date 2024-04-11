import { RouteCfg } from "../core/ssg";
// 定义路由
const Route:RouteCfg[] = [
    {
        page: "index",
        source: "index",
        props: { title: "首页" }
    },
    {
        page: "markdown",
        source: "markdown",
        props: { title: "MarkDown基础", mdfile: "markdown-base.md" }
    },
    {
        page: "go",
        source: "markdown",
        props: { title: "go基础", mdfile: "go-base.md" }
    }
]
export default Route