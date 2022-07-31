import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

function Button({ isLoading, children, ...props }: ButtonProps) {
  return <button {...props}>{isLoading ? "..." : children}</button>;
}

export { Button };
