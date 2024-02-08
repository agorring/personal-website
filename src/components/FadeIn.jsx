import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { Waypoint } from "react-waypoint";
import { useState } from "react";

const FadeIn = ({ animation, children }) => {
  const [inView, setInview] = useState(false);

  const transition = useSpring({
    delay: 500,
    to: {
      y: !inView ? 24 : 0,
      opacity: !inView ? 0 : 1,
    },
  });
  return (
    <Waypoint onEnter={() => setInview(true)}>
      <animated.div style={transition}>{children}</animated.div>
    </Waypoint>
  );
};

export default FadeIn;
