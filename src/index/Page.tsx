import React from "react";
import Layout from "../_components/Layout";
import styled from "styled-components";
const HomeStyle = styled.div`
  h3 {
    width: 100%;
    margin: 0;
    padding: 0;
    padding-top: 200px;
    text-align: center;
  }
  div.summary {
    text-align: center;
    margin-top: 20px;
  }
`

function Page(props: any) {
  return (
    <Layout>
      <HomeStyle>
        <h3>swallsky books</h3>
        <div className="summary">技术文档分享</div>
      </HomeStyle>
    </Layout>
  );
}

export default Page;
