import React from "react";
import styled from "styled-components";

const HeadStyle = styled.div`
    position: fixed;
    width: 100%;
    height: 60px;
    line-height: 60px;
    z-index: 1000;
    background-color: #F9F9f9;
    border-bottom: 1px solid #DDD;
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
                color: #666;
                font-size: 16px;
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
