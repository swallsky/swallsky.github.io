import React from "react";
import LayoutMarkdown from "../_components/LayoutMarkdown";

function Page(props) {
  return (
    <LayoutMarkdown>
      <div className="menu">
        <ul>
          <li><span className="icon" /><a href="/go.html">Go语言基础</a></li>
        </ul>
      </div>
      <div className="cnt">
        <div dangerouslySetInnerHTML={{ __html: props.serData.gobase }} />
      </div>
    </LayoutMarkdown>
  );
}

export default Page;
