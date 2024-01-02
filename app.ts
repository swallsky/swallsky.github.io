import fs from "fs"
import esbuild from "esbuild"
import markdown from "markdown-it"
const MD = markdown({html:true})
import Server from "./src/Server"

const main = async ()=>{
    // 获取markdown数据
    const mdData = getMarkDown()
    // props全局数据
    const props = { name: "hello", mdText:mdData }

    // 打包客户端js
    createJsBundle()
    // ssg服务端
    const html = await Server(props)
    
    // ssg部分生成index.html
    const template = fs.readFileSync("./public/index.html","utf-8")
    
    const prerendered_page = template
    .replace('<%title%>', props.name)
    .replace('<%ssg_props%>', JSON.stringify(props))
    .replace('<%html%>', html)

    // 生成index.html页面
    fs.writeFileSync("./index.html",prerendered_page)
}

// 获取markdown数据
const getMarkDown = ()=>{
    // 获取服务端数据
    var mdRemote = fs.readFileSync("./markdown/md.md","utf-8");
    return MD.render(mdRemote.toString());
}

//  打包前端需要的js
const createJsBundle = ()=>esbuild.buildSync({
    entryPoints: ['./src/App.tsx'],
    bundle: true,
    minify: true,
    outfile: './index.js'
})

// 执行
main()