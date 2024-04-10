import React from "react";
import LayoutMarkdown from "../_components/LayoutMarkdown";

function Page(props) {
  return (
    <LayoutMarkdown>
      <div className="menu">
        <div dangerouslySetInnerHTML={{ __html: props.serData.gobase.menus }} />
      </div>
      <div className="cnt">
        <div dangerouslySetInnerHTML={{ __html: props.serData.gobase.content }} />
      </div>
    </LayoutMarkdown>
  );
}

export default Page;
