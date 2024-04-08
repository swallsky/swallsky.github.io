import { GetMarkDownFile } from "../../core/utils";

// 获取服务端数据
let res = GetMarkDownFile("./src/markdown/base.md");

export default (props:any)=> {
  return {
    markdown: res
  }
};
