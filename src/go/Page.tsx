import React from "react";
import LayoutSider from "../_components/LayoutSider";

function Page(props) {
  return (
    <LayoutSider>
      <div className="menu">
        <ul>
          <li><span className="icon" /><a href="/go.html">Go语言基础</a></li>
        </ul>
      </div>
      <div className="cnt">
        <div dangerouslySetInnerHTML={{ __html: props.serData.gobase }} />
      </div>
    </LayoutSider>
  );
}

export default Page;
