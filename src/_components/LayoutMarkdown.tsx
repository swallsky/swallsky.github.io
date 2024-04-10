import React from "react";
import Header from "./Header";
import Loading from "./Loading";
import styled from "styled-components";

const Content = styled.div`
  display: flex;
  background-color: #f5f5f5;
  margin-top: 62px;
  div.menu {
    width: 300px;
    height: 100vh;
    nav {
      border-right: 1px solid #ccc;
      position: fixed;
      width: 300px;
      height: 100vh;
      left: 0;
      overflow: auto;
      ol {
        padding-left: 30px;
        li {
          margin: 0;
          padding: 0;
          a {
            display: block;
            color: #333;
            text-decoration: none;
            font-size: 14px;
          }
        }
      }
    }
  }
  div.cnt {
    width: 1090px;
    background-color: #fff;
    padding: 0 20px;
    /* 引用块的样式 */
    blockquote {
        display: block;
        padding-left: 16px;
        padding-right: 16px;
        margin: 0 0 24px;
        border-left: 8px solid #dddfe4;
        background-color: #eef0f4;
        overflow: auto;
        word-break: normal;
    }
    /* 表格 */
    table {
      border-spacing: 0;
      thead tr th {
        border-bottom: 1px solid #ccc;
        padding: 10px;
        text-align: left;
      }
      tbody tr td {
        border-bottom: 1px solid #ccc;
        padding: 10px;
      }
    }
    /* 复制代码 */
    div.code-copy {
      text-align: left;
      font-size: 14px;
      padding: 0.6em 1em;
      cursor: pointer;
      background-color: #bcbaba;
    }
  }
`

interface Props {
  children: any;
}

function LayoutMarkdown(props:Props) {
  return (
    <Loading>
        <Header />
        <Content>
          {props.children}
        </Content>
    </Loading>
  );
}

export default LayoutMarkdown;
