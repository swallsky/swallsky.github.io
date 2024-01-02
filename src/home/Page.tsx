import React from "react";

function Index(props) {
  return (
    <>
      <div>hello</div>
      <div dangerouslySetInnerHTML={{ __html: props.mdText }} />
    </>
  );
}

export default Index;
