import React from "react";
import Layout from "../_components/Layout";
import styled from "styled-components";
const HomeStyle = styled.div`
  height: calc(100vh-100px);
  background-color: antiquewhite;
  h3 {
    width: 100%;
    margin: 0;
    padding: 0;
    padding-top: 200px;
    text-align: center;
  }
`

function Page(props: any) {
  return (
    <Layout>
      <HomeStyle>
        <h3>swallsky books</h3>
      </HomeStyle>
    </Layout>
  );
}

export default Page;
