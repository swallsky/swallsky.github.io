import React from "react";

function Index(props) {
  // console.log(props);
  return (
    <>
      <div>hello</div>
      <div dangerouslySetInnerHTML={{ __html: props.serData.markdown }} />
    </>
  );
}

export default Index;
