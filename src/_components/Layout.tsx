import React, { useEffect, useState } from "react";
import Header from "./Header";

interface Props {
  children: any;
}

function Layout(props:Props) {
  const [loaded,setLoaded] = useState(false);
  useEffect(()=>{
    setLoaded(true);
  },[]);
  return (
    <div style={{display:loaded?"":"none"}}>
        <Header />
        {props.children}
    </div>
  );
}

export default Layout;
