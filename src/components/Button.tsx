import React from "react";

type Props = {
  styles: any;
};

function Button({ styles }: Props) {
  return (
    <button
      type="button"
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
    >
      Começar
    </button>
  );
}

export default Button;
