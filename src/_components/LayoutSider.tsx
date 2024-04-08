import React from "react";
import Header from "./Header";
import Loading from "./Loading";
import styled from "styled-components";

const Content = styled.div`
  display: flex;
  background-color: #f5f5f5;
  margin-top: 62px;
  div.menu {
    width: 260px;
    flex: 0 0 auto;
    height: 100vh;
    ul {
      border-right: 1px solid #ccc;
      position: fixed;
      width: 260px;
      left: 0;
      list-style: none;
      margin: 0;  
      padding: 0;
      li {
        margin: 0;
        padding: 10px;
        border-bottom: 1px solid #efebeb;
        font-size: 14px;
        display: flex;
        span.icon {
          width: 20px;
          height: 20px;
          display: block;
          margin-right: 5px;
          background-image: url("./img/icon.gif");
        }
        a {
          display: block;
          color: #333;
          text-decoration: none;
        }
      }
    }
  }
  div.cnt {
    flex: 1 1 auto;
    background-color: #fff;
    padding: 0 20px;
  }
`

interface Props {
  children: any;
}

function LayoutSider(props:Props) {
  return (
    <Loading>
        <Header />
        <Content>
          {props.children}
        </Content>
    </Loading>
  );
}

export default LayoutSider;
