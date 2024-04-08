import React from "react";
import LayoutMarkdown from "../_components/LayoutMarkdown";

function Index(props) {
  return (
    <LayoutMarkdown>
      <div className="menu">
        <ul>
          <li><span className="icon" /><a href="/markdown.html">Markdown基础</a></li>
        </ul>
      </div>
      <div className="cnt">
        <div dangerouslySetInnerHTML={{ __html: props.serData.markdown }} />
      </div>
    </LayoutMarkdown>
  );
}

export default Index;
