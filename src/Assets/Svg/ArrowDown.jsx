const ArrowDown = ({ color, features }) => {
  return (
    <svg
      width={features.width}
      height={features.height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={features.onClick}
    >
      <path
        d="M12.364 12.95L17.314 8L18.728 9.414L12.364 15.778L6.00003 9.414L7.41403 8L12.364 12.95Z"
        fill={color || "white"}
      />
    </svg>
  );
};

export default ArrowDown;
