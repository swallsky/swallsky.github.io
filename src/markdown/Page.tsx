import React from "react";
import Layout from "../_components/Layout";

function Index(props) {
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: props.serData.markdown }} />
    </Layout>
  );
}

export default Index;
