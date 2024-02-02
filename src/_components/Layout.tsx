import React, { ReactDOM } from "react";
import Header from "./Header";

interface Props {
  children: any;
}

function Layout(props:Props) {
  return (
    <>
        <Header />
        {props.children}
    </>
  );
}

export default Layout;
