import { useEffect, useRef } from "react";
import "../App.css";

function AnimatedLine() {
  const line = useRef(null);

  function animate_svg_on_scroll(value) {
    console.log("value", value);
    var line_total_length = line.current.getTotalLength();
    line.current.style.strokeDasharray = line_total_length;
    line.current.style.strokeDashoffset = line_total_length;
    var draw = line_total_length * value;
    line.current.style.strokeDashoffset = line_total_length - draw;
  }

  useEffect(() => {
    const handleScroll = (event) => {
      if (window.scrollY > 0) {
        const value = (window.scrollY - 1) / 1069;
        animate_svg_on_scroll(value);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="homepage_main_div">
      <h2 style={{ marginTop: "50px" }}>What is kombucha</h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // width="322"
        // height="1778"
        viewBox="0 0 322 1778"
        preserveAspectRatio="none"
        className="homepage_logo"
      >
        <g
          transform="translate(0.000000,400.000000) scale(0.100000,-0.100000)"
          fill="none"
          strokeWidth="20"
          style={{
            width: "3220px",
            height: "17780px"
          }}
        >
          <path
            id="tiger"
            d="M-2 1777C59 1759.5 224.235 1716.68 91.5 1690.5C-41.2351 1664.32 343.289 1371.35 192 1286C150.626 1262.66 149.445 1183.82 117.5 1130.5C93.2379 1090 30.5594 1025.28 39 987.5C55.4447 913.901 118.967 948.964 139.5 917.5C202.405 821.102 225.943 718.629 78.0002 674.5C-38.9122 639.627 326.827 492.132 139.5 459C-47.8268 425.867 27.6939 156.943 210 169.5C392.306 182.057 297.138 79.8854 287 0.5"
            ref={line}
            stroke="#72777B"
            fill="none"
            strokeWidth="20"
          />
        </g>
      </svg>
    </div>
  );
}

export default AnimatedLine;
