import React from "react";
import { useSpring, animated } from "react-spring";

const Number = ({ n }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return (
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 font-bold absolute right-auto"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
        />
      </svg>
      <animated.div>{number.to((n) => n?.toFixed(0))}</animated.div>
    </div>
  );
};

export default Number;
