import React from "react";
import styled from "styled-components";

const HeadStyle = styled.div`
    background-color: #1b1c26;
    color: #028399;
    ul {
        display: flex;
        list-style: none;
    }
`


function Header() {
  return (
    <HeadStyle>
        <ul>
            <li>Markdown</li>
            <li>Go基础</li>
        </ul>
    </HeadStyle>
  );
}

export default Header;
