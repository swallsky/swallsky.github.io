import fs from "fs";
import markdown from "markdown-it";
const MD = markdown({ html: true });

// 获取markdown数据
export const GetMarkDownFile = (mdfile: string) => {
  var mdRemote = fs.readFileSync(mdfile, "utf-8");
  return MD.render(mdRemote.toString());
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
