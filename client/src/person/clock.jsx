import { useState, useEffect } from "react";
import Icon from "@mdi/react";
import { mdiWhiteBalanceSunny, mdiWeatherNight } from "@mdi/js";
import Button from "react-bootstrap/Button";

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [backgroundDark, setBackgroundDark] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, [time]);

  console.log(backgroundDark, " - ", time);

  return (
    <div
      style={{
        backgroundColor: backgroundDark ? "black" : "white",
        color: backgroundDark ? "white" : "black",
      }}
    >
      {time}
      <Button
        onClick={() => setBackgroundDark((current) => !current)}
        variant={backgroundDark ? "light" : "dark"}
      >
        <Icon
          path={backgroundDark ? mdiWhiteBalanceSunny : mdiWeatherNight}
          title="User Profile"
          size={1}
        />
      </Button>
    </div>
  );
}

export default Clock;
