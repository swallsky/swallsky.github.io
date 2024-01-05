import React from "react";

function Page(props:any) {
  return (
    <>
        <ul>
            <li><a href="./markdown.html">MarkDown</a></li>
            <li>go语言
              <ul>
                <li><a href="./go.html">Go基础</a></li>
              </ul>
            </li>
        </ul>
        <div>{props.serData.baidu}</div>
    </>
  );
}

export default Page;
