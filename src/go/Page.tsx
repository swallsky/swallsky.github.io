import React from "react";
import Layout from "../_components/Layout";

function Page(props) {
  return (
    <Layout>
        <div className="warp" dangerouslySetInnerHTML={{ __html: props.serData.gobase }} />
    </Layout>
  );
}

export default Page;
