const FireAnimation = () => {
  const parts = 10;
  const particles = Array.from({ length: parts }).map((_, index) => {
    const delay = Math.random() + "s";
    const left = `calc((100% - 5em) * ${index / parts})`;
    return (
      <div
        className="particle"
        key={index}
        style={{
          animationDelay: delay,
          left: left
        }}
      />
    );
  });
  return <div className="fire">{particles}</div>;
};

export default FireAnimation;
