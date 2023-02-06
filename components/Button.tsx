import React from "react";
import ctl from "@netlify/classnames-template-literals";

interface IButton {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  customClass?: string;
  dataCy?: string;
}

const Button = ({ children, onClick, customClass, dataCy }: IButton) => {
  const buttonCN = ctl(`
    rounded-full
    bg-[#64B6D0]
    hover:bg-[#0da0cf]
    duration-150
    py-[8px]
    px-[16px]
    font-bold
    ${customClass && customClass}
  `);

  return (
    <button className={buttonCN} onClick={onClick} data-cy={dataCy}>
      {children}
    </button>
  );
};

export default Button;
