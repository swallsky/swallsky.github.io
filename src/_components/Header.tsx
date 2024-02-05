import React from "react";
import styled from "styled-components";

const HeadStyle = styled.div`
    background-color: #1b1c26;
    height: 60px;
    line-height: 60px;
    ul {
        display: flex;
        list-style: none;
        justify-content: flex-start;
        margin: 0;
        padding: 0;
        li {
            margin: 0 10px;
            a {
                text-decoration: none;
                color: #028399;
            }
        }
    }
`

function Header() {
  return (
    <HeadStyle>
        <ul>
            <li><a href="./">首页</a></li>
            <li><a href="./markdown.html">Markdown</a></li>
            <li><a href="./go.html">Go基础</a></li>
        </ul>
    </HeadStyle>
  );
}

export default Header;
