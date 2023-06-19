import * as React from "react";

/**
 * @date 28-10-2022
 * @author Jitendra Maharana <jitendra.maharana@nettantra.net>
 * @param Color
 * @returns JSX Element
 * Icon Render Component
 */
const Extend = ({
  color = "#8E8E8E",
  transform = "rotate(90)",
  width = "12px",
  height = "12px",
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 8.85 17.32"
      width={width}
      height={height}
      transform={transform}
      {...props}
    >
      <g data-name="Layer 2">
        <path
          d="M1 17.32a1 1 0 0 1-.75-1.67l6.26-7-6.26-7A1 1 0 0 1 .33.26a1 1 0 0 1 1.41.07L8.6 8a1 1 0 0 1 0 1.34L1.74 17a1 1 0 0 1-.74.32Z"
          fill={color}
          data-name="Layer 1"
        />
      </g>
    </svg>
  );
};

export default Extend;
