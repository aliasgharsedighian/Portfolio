"use client";
import React, { useEffect, useState } from "react";

function SetIntervalPage() {
  const [timer, setTimer] = useState("");

  useEffect(() => {
    const countDown = (m, s) => {
      setInterval(() => {
        if (m == 0 && s == 1) {
          setTimer("00:00");
        } else {
          s--;
          if (s == 0) {
            m--;
            s = 60;

            if (m == 0) {
              m = m;
            }
          }
          if (m.toString().length == 1) {
            m = "0" + m;
          }

          if (s.toString().length == 1) {
            s = "0" + s;
          }
          setTimer(m + ":" + s);
        }
      }, 1000);
    };
    countDown(2, 30);
    return () => {
      clearInterval(countDown);
    };
  }, []);
  return (
    <div>
      <p>count down timer:</p>
      <p>{timer}</p>
    </div>
  );
}

export default SetIntervalPage;
