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
    },
    {
        page: "go-reverse", 
        source: "markdown", 
        props: {    
            title: "Go反向代理", 
            mdfile: "go-reverse.md"
        }
    },
    {
        page: "node-base",
        source: "markdown",
        props: {
            title: "Node.js入门", 
            mdfile: "node-base.md" 
        }
    },
    {
        page: "node-base2",
        source: "markdown",
        props: {
            title: "Node.js基础", 
            mdfile: "node-base2.md" 
        }
    },
    {
        page: "node-typescript",
        source: "markdown",
        props: {    
            title: "TypeScript基础", 
            mdfile: "node-typescript.md" 
        }
    },
    {
        page: "ft-nextjs",
        source: "markdown",
        props: {    
            title: "Next.js", 
            mdfile: "ft-nextjs.md" 
        }
    },
    {   
        page: "ft-react-communication",
        source: "markdown",
        props: {    
            title: "React通信方式", 
            mdfile: "ft-react-communication.md" 
        }
    },
]
export default Route