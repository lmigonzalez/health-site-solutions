"use client";
import { useEffect } from "react";

const LiveChat = () => {
  useEffect(() => {
    const s1 = document.createElement("script");
    s1.async = true;
    s1.src = "https://embed.tawk.to/66afeb7f1601a2195ba0b7e3/1i4fivq8j";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    document.body.appendChild(s1);

    return () => {
      document.body.removeChild(s1);
    };
  }, []);

  return null;
};

export default LiveChat;
