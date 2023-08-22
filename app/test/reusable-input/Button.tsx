import React, { useEffect } from "react";

interface pageProps {
  buttonClass: string;
  buttonType?: any;
  buttonText: string;
  onClickButton?: any;
}

function Button({
  buttonClass,
  buttonType,
  buttonText,
  onClickButton,
}: pageProps) {
  function classButton() {
    if (buttonClass === "red") {
      return "class-btn-for-sell";
    }
    if (buttonClass === "green") {
      return "class-btn-for-buy";
    }
    if (buttonClass === "blue") {
      return "class-btn-for-info";
    } else {
      buttonClass;
    }
  }

  return (
    <div>
      <button
        className={classButton()}
        type={buttonType}
        onClick={onClickButton}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default Button;
