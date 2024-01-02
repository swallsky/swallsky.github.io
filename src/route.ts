// 定义路由
interface RouteCfg {
    page: string //页面目录
    props: any //预处理数据
    children?: RouteCfg[]
}
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