import { Box, Container } from "@chakra-ui/react";
import React, { useEffect } from "react";

export default function index() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.getElementById("tally-js").appendChild(script);

    return () => {
      document.getElementById("tally-js").removeChild(script);
    };
  }, []);

  return (
    <Box as={Container} maxW="7x1" id="contact">
      <iframe
        data-tally-src="https://tally.so/embed/meQ5Xk?alignLeft=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="310"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Hablemos!"
      ></iframe>
      <div id="tally-js"></div>
    </Box>
  );
}
