import React, { useEffect, useState } from "react";

interface Props {
  children: any;
}
// 加载页面
function Loading(props: Props) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  return <div style={{ display: loaded ? "" : "none" }}>{props.children}</div>;
}

export default Loading;
