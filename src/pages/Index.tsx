import React from "react";

function Index(props) {
  return <div dangerouslySetInnerHTML={{ __html: props.mdText }} />;
}

export default Index;
