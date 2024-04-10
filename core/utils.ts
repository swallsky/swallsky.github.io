import fs from "fs";
import markdown from "markdown-it";
import hljs from "highlight.js";

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
});

// 获取markdown数据
export const GetMarkDownFile = (mdfile: string) => {
  var mdRemote = fs.readFileSync(mdfile, "utf-8");
  var mdStr = mdRemote.toString();
  return MD.render(mdStr);
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
