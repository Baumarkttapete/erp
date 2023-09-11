import React, { useState, useEffect } from "react";
import Fab from "@mui/material/Fab";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const ScrollBtn: React.FC<{
  scrollUp: boolean;
}> = ({ scrollUp }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const bodyHeight = document.body.scrollHeight;

      if (scrollUp) {
        setIsVisible(scrollY > 50);
      } else {
        setIsVisible(scrollY < bodyHeight - windowHeight - 50);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollUp]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <Fab
      color="primary"
      aria-label={scrollUp ? "scroll-up" : "scroll-down"}
      size="small"
      onClick={scrollUp ? scrollToTop : scrollToBottom}
      style={{
        position: "fixed",
        bottom: scrollUp ? "53%" : "47%",
        right: "20px",
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.5s",
      }}
    >
      {scrollUp ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
    </Fab>
  );
};

export default ScrollBtn;
