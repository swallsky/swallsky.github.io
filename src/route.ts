// 定义路由
interface RouteCfg {
    html: string
    path: string
    children?: RouteCfg[]
}
const Route:RouteCfg[] = [
    {
        html: "index.html",
        path: "./pages/Index"
    }
]
export default Route