import React from "react";
import { BUTTON_STYLES } from "@/constants/styleConstants";
const Button = React.forwardRef(
  (
    {
      className,
      children,
      onClick,
      type = "button",
      isLoading = false,
      ariaLabel,
      role = "button",
      style,
      ...props
    },
    ref
  ) => {
    const baseClasses = BUTTON_STYLES.BASE;
    const loadingClasses = BUTTON_STYLES.LOADING;
    const buttonClasses = `${baseClasses} ${
      isLoading ? loadingClasses : ""
    } ${className}`;

    const handleClick = (event) => {
      if (isLoading) {
        event.preventDefault();
        return;
      }
      onClick && onClick(event);
    };

    return (
      <button
        className={buttonClasses}
        onClick={handleClick}
        type={type}
        aria-label={ariaLabel || (typeof children === "string" ? children : "")}
        role={role}
        ref={ref}
        style={style}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default Button;
