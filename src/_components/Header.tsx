import React from "react";
import styled from "styled-components";

const HeadStyle = styled.div`
    position: fixed;
    top: 0;
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
            width: 100px;
            a {
                text-decoration: none;
                color: #666;
                font-size: 16px;
            }
            ul.sub-menu {
                display: flex;
                flex-direction: column;
                background-color: #F9F9f9;
                border: 1px solid #DDD;
                margin-top: -5px;
                margin-left: -12px;
                li {
                    height: 35px;
                    line-height: 35px;
                    border-bottom: 1px solid #DDD;
                }
            }
        }
    }
`

function Header() {
    const [isHover, setIsHover] = React.useState<any>([]);
    const toggleHover = (n:number) => {
        isHover[n] = !isHover[n];
        setIsHover([...isHover]);
    };
  return (
    <HeadStyle>
        <ul>
            <li><a href="./">首页</a></li>
            <li onMouseEnter={()=>toggleHover(0)} onMouseLeave={()=>toggleHover(0)}>
                <a href="./go-base.html">Go语言</a>
                {isHover[0] && (<ul className="sub-menu">
                    <li><a href="./go-base.html">基础语法</a></li>
                    <li><a href="./go-cobra.html">Cobra</a></li>
                    <li><a href="./go-viper.html">Viper</a></li>
                    <li><a href="./go-gin.html">Gin框架</a></li>
                    <li><a href="./go-net.html">Net</a></li>
                </ul>)}
            </li>
            <li onMouseEnter={() => toggleHover(1)} onMouseLeave={() => toggleHover(1)}>
                <a href="./node-base.html">Node.js</a>
                {isHover[1] && (<ul className="sub-menu">
                    <li><a href="./node-base.html">Node.js入门</a></li>
                    <li><a href="./node-base2.html">Node.js基础</a></li>
                    <li><a href="./node-typescript.html">TypeScript</a></li>
                </ul>)}
            </li>
            <li onMouseEnter={() => toggleHover(2)} onMouseLeave={() => toggleHover(2)}>
                <a href="./ft-react-communication.html">前端</a>
                {isHover[2] && (<ul className="sub-menu">
                    <li><a href="./ft-nextjs.html">Next.js</a></li>
                    <li><a href="./ft-react-communication.html">React通讯</a></li>
                    <li><a href="./markdown-base.html">Markdown</a></li>
                </ul>)}
            </li>
        </ul>
    </HeadStyle>
  );
}

export default Header;
