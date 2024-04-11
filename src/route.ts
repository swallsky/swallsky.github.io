import { RouteCfg } from "../core/ssg";
// 定义路由
const Route:RouteCfg[] = [
    {
        page: "index",
        source: "index",
        props: { title: "首页" }
    },
    {
        page: "markdown-base",
        source: "markdown",
        props: { 
            title: "MarkDown基础", 
            mdfile: "markdown-base.md"
        }
    },
    {
        page: "go-base",
        source: "markdown",
        props: { 
            title: "Go基础", 
            mdfile: "go-base.md" 
        }
    },
    {
        page: "go-cobra",
        source: "markdown",
        props: {    
            title: "Cobra命令行工具", 
            mdfile: "go-cobra.md" 
        }
    },
    {   
        page: "go-viper",
        source: "markdown",
        props: {    
            title: "Viper配置管理", 
            mdfile: "go-viper.md" 
        }
    },
    {   
        page: "go-gin",
        source: "markdown",
        props: {    
            title: "Gin框架", 
            mdfile: "go-gin.md" 
        }
    },
    {
        page: "go-net", 
        source: "markdown", 
        props: {    
            title: "Go网络编程", 
            mdfile: "go-net.md" 
        }
    }
]
export default Route