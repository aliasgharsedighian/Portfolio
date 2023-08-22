"use cleint";
import React, { useState, useImperativeHandle } from "react";

function InputField({ apiRef, onChange, label }: any) {
  const [shouldShake, setShouldShake] = useState(false);

  //   useImperativeHandle(
  //     apiRef,
  //     () => ({
  //       focus: () => {
  //         // apiRef.current.focus();
  //       },
  //       shake: () => {
  //         // setShouldShake(true);
  //       },
  //     }),
  //     []
  //   );
  return (
    <div>
      <input
        type="text"
        ref={apiRef}
        onChange={(e) => onChange(e.target.value)}
      />
      <div>{label}</div>
    </div>
  );
}

export default InputField;
