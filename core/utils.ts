import fs from "fs";
import markdown from "markdown-it";
import hljs from "highlight.js";
import markdownItAnchor from "markdown-it-anchor";
import markdownItTocDoneRight from "markdown-it-toc-done-right";
import uslugify from "@sindresorhus/slugify";

// 获取markdown数据
export const GetMarkDownFile = (mdfile: string) => {
// 读取markdown文件
  var mdRemote = fs.readFileSync(mdfile, "utf-8");
  var mdStr = mdRemote.toString();
  // 菜单
  let menus:any
  // markdown渲染
  const MD = markdown({ html: true, xhtmlOut: true, linkify: true, typographer: true, breaks: true, langPrefix: 'language-',
        highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return '<pre><div class="code-copy" onclick="CopyCode(this)">复制代码</div><code class="hljs">' +
                            hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
                            '</code></pre>';
                } catch (__) {}
            }
        
            return '<pre><code class="hljs">' + MD.utils.escapeHtml(str) + '</code></pre>';
        }
    })
    .use(markdownItAnchor, { permalink: true, permalinkSymbol: '§',slugify: uslugify })
    .use(markdownItTocDoneRight,{ slugify: uslugify, callback: (tocMarkdown, tocArray) => menus=tocMarkdown });
  const content = MD.render(mdStr);
  return { content, menus }
};

/**
 * 判断文件是否存在
 * @param filePath 
 * @returns 
 */
export const IsFileExists = (filePath:string)=> {
    try{
        fs.accessSync(filePath);
        return true;
    }catch(errror) {
        return false
    }
}
