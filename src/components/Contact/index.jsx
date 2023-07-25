import { Box, Container } from "@chakra-ui/react";
import React, { useEffect } from "react";

export default function index() {
  useEffect(() => {
    const d = document;
    const w = "https://tally.so/widgets/embed.js";

    const loadEmbeds = () => {
      if (typeof Tally !== "undefined") {
        Tally.loadEmbeds();
      } else {
        d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach(
          (iframe) => {
            iframe.src = iframe.dataset.tallySrc;
          }
        );
      }
    };

    if (typeof Tally !== "undefined") {
      loadEmbeds();
    } else if (d.querySelector('script[src="' + w + '"]') == null) {
      const script = d.createElement("script");
      script.src = w;
      script.onload = loadEmbeds;
      script.onerror = loadEmbeds;
      d.body.appendChild(script);
    }
  }, []);

  return (
    <Box as={Container} maxW="7xl" my={14} p={4} id="contact">
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
