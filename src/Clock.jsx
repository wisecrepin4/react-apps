import { useState, useEffect } from "react";
export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timechange = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timechange);
    };
  }, []);

  const formatTime = () => {
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    let meridian = hour > 12 ? "PM" : "AM";

    hour = hour % 12 || 12;

    return `${putZero(hour)}:${putZero(minute)}:${putZero(second)} ${meridian}`;
  };
  function putZero(num) {
    return (num < 10 ? "0" : "") + num;
  }
  return (
    <div className="clock-holder">
      <div className="clock">{formatTime()}</div>
    </div>
  );
}
