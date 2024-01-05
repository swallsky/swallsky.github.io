import http from "http";
import fs from "fs";
import path from "path";
import config from "../book.config";

// 创建一个简单的静态web服务
const server = http.createServer((req, res) => {
  let filePath = config.buildDir + req.url;
  if (filePath === config.buildDir + "/") {
    //默认首页
    filePath = config.buildDir + "/index.html";
  }

  const extname = String(path.extname(filePath)).toLowerCase(); //获取文件的扩展名并转换为小写。
  const contentType =
    {
      ".html": "text/html",
      ".js": "text/javascript",
      ".css": "text/css",
      ".json": "application/json",
      ".png": "image/png",
      ".jpg": "image/jpg",
      ".gif": "image/gif",
      ".svg": "image/svg+xml",
      ".wav": "audio/wav",
      ".mp4": "video/mp4",
      ".woff": "application/font-woff",
      ".ttf": "application/font-ttf",
      ".eot": "application/vnd.ms-fontobject",
      ".otf": "application/font-otf",
      ".wasm": "application/wasm",
    }[extname] || "application/octet-stream"; // 如果找不到对应的 Content-Type，默认使用 application/octet-stream
  console.log(filePath);

  fs.readFile(filePath, function (error, content) {
    //读取文件内容的回调函数
    if (error) {
      // 如果读取文件出现错误
      if (error.code === "ENOENT") {
        //如果文件不存在时
        res.writeHead(404, { "Content-Type": "text/html" }); //返回状态码和Content-Type
        res.end("404", "utf-8");
      } else {
        res.writeHead(500); // 返回状态码 500
        res.end(error.code); // 返回错误信息
        res.end(); // 结束响应
      }
    } else {
      res.writeHead(200, contentType); //返回状态码和Content-Type
      res.end(content, "utf-8");
    }
  });
});

// server on develop env
export default () => {
  const port = process.env.PORT || config.server.port;
  server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });
};
