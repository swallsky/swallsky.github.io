import React from "react";
import LayoutSider from "../_components/LayoutSider";

function Index(props) {
  return (
    <LayoutSider>
      <div className="menu">
        <ul>
          <li><span className="icon" /><a href="/markdown.html">Markdown基础</a></li>
        </ul>
      </div>
      <div className="cnt">
        <div dangerouslySetInnerHTML={{ __html: props.serData.markdown }} />
      </div>
    </LayoutSider>
  );
}

export default Index;
