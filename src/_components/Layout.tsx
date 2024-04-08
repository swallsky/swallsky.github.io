import React from "react";
import Header from "./Header";
import Loading from "./Loading";

interface Props {
  children: any;
}

function Layout(props:Props) {
  return (
    <Loading>
        <Header />
          {props.children}
    </Loading>
  );
}

export default Layout;
