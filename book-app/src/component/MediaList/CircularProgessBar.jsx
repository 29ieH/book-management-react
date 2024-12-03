import propTypes from "prop-types";

const CircularProgessBar = ({
  percent = 30,
  point = 3,
  stroW = 0.25,
  strokeColor = "green",
}) => {
  const radius = point / 2 - stroW;
  const cperimeter = 2 * Math.PI * radius;
  const percentCross = cperimeter - (percent / 100) * cperimeter;
  return (
    <div>
      <svg width={`${point}vw`} height={`${point}vw`}>
        <circle
          r={`${radius}vw`}
          cx={`${point / 2}vw`}
          cy={`${point / 2}vw`}
          stroke="white"
          strokeDasharray={`${cperimeter}vw`}
          strokeWidth={`${stroW}vw`}
        ></circle>
        <circle
          r={`${radius}vw`}
          cx={`${point / 2}vw`}
          cy={`${point / 2}vw`}
          fill="none"
          stroke={strokeColor}
          strokeDasharray={`${cperimeter}vw`}
          strokeWidth={`${stroW}vw`}
          strokeDashoffset={`${percentCross}vw`}
          style={{
            transform: `rotate(-90deg)`,
            transformOrigin: `${point / 2}vw ${point / 2}vw`, // Đặt điểm xoay là giữa vòng tròn
          }}
          strokeLinecap="round"
        ></circle>
        <text
          x={`${point / 2}vw`}
          y={`${point / 2}vw`}
          fill="white"
          alignmentBaseline="middle"
          textAnchor="middle"
          fontSize={"1.2vw"}
        >
          {percent}
        </text>
      </svg>
    </div>
  );
};
CircularProgessBar.propTypes = {
  percent: propTypes.number,
  point: propTypes.number,
  stroW: propTypes.number,
  strokeColor: propTypes.string,
};
export default CircularProgessBar;
