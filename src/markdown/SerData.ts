import { GetMarkDownFile } from "../../core/utils";


export default (props:any)=> {
  // 获取服务端数据
  let res = GetMarkDownFile("./src/_md/"+props.mdfile);
  return {
    markdown: res
  }
};
