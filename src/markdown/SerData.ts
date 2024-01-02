import { GetMarkDownFile } from "../../libs";

// 获取服务端数据
let res = GetMarkDownFile("./mds/markdown.md");

export default {
  markdown: res,
};
