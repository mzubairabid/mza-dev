// components/Button.tsx
import React, { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "destructive"
  | "link";

type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  className?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  // Base styling for consistency and dark mode support
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-lg cursor-pointer";

  // Variant styling mapping
  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
    secondary:
      "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline:
      "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    ghost:
      "hover:bg-accent hover:text-accent-foreground",
    destructive:
      "bg-red-600 text-white hover:bg-red-700 shadow-sm",
    link:
      "text-primary underline-offset-4 hover:underline p-0 h-auto",
  };

  // Size styling mapping
  const sizeStyles: Record<ButtonSize, string> = {
    sm: "h-8 px-3 text-xs rounded-md",
    md: "h-10 px-4 py-2 text-sm",
    lg: "h-12 px-6 text-base rounded-xl",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <svg
            className="animate-spin h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
}

export default Button;