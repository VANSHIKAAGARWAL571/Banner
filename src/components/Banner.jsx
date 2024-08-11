import React, { useEffect, useState } from 'react';

const Banner = ({ description, link, timer, isVisible }) => {
  const [timeLeft, setTimeLeft] = useState(timer);

  useEffect(() => {
    if (!isVisible || timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, isVisible]);

  if (!isVisible || timeLeft <= 0) return null;

  return (
    <div className="info">
      <p>{description}</p>
      {link && <a href={link}>Click Here</a>}
      <div>Time Left: {timeLeft}s</div>
    </div>
  );
};

export default Banner;
