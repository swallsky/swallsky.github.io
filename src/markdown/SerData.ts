import { GetMarkDownFile } from "../../core/utils";

// 获取服务端数据
let res = GetMarkDownFile("./mds/markdown.md");

export default {
  markdown: res,
};
