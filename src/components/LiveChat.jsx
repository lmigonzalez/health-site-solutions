"use client";
import { useEffect } from "react";

const LiveChat = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/66afeb7f1601a2195ba0b7e3/1i4fivq8j"; // Tawk.to script URL
    script.charset = "UTF-8";

    // Append the script to the document body
    document.body.appendChild(script);

    // Cleanup script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures this runs only once

  return null; // No need to render anything
};

export default LiveChat;
