import { GetMarkDownFile } from "../../core/utils";

// 获取服务端数据
let res = GetMarkDownFile("./mds/gobase.md");

export default (props:any)=> {
  return {
    gobase: res
  }
};
