import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function Button({ children, ...props }: ButtonProps) {
  return <button {...props}>{children}</button>;
}

export { Button };
