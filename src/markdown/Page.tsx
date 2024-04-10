import React from "react";
import LayoutMarkdown from "../_components/LayoutMarkdown";

function Index(props) {
  return (
    <LayoutMarkdown>
      <div className="menu">
        <div dangerouslySetInnerHTML={{ __html: props.serData.markdown.menus }} />
      </div>
      <div className="cnt">
        <div dangerouslySetInnerHTML={{ __html: props.serData.markdown.content }} />
      </div>
    </LayoutMarkdown>
  );
}

export default Index;
