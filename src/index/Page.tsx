import React from "react";
import Layout from "../_components/Layout";

function Page(props: any) {
  return (
    <Layout>
      <div>
        <ul>
          <li>
            <a href="./markdown.html">MarkDown</a>
          </li>
          <li>
            go语言
            <ul>
              <li>
                <a href="./go.html">Go基础</a>
              </li>
            </ul>
          </li>
        </ul>
        <div>{props.serData.baidu}</div>
      </div>
    </Layout>
  );
}

export default Page;
