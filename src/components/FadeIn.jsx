import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { Waypoint } from "react-waypoint";
import { useState } from "react";

const FadeIn = ({ direction, children }) => {
  const [inView, setInview] = useState(false);

  const transition = useSpring({
    delay: 500,
    to: {
      x: direction === "right" ? (inView ? 0 : 24) : 0,
      y: direction === "bottom" ? (inView ? 0 : 24) : 0,
      opacity: inView ? 1 : 0,
    },
  });
  return (
    <Waypoint onEnter={() => setInview(true)}>
      <animated.div style={transition}>{children}</animated.div>
    </Waypoint>
  );
};

export default FadeIn;
