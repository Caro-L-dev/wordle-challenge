interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: "default" | "enter" | "delete";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  variant = "default",
  className,
}) => {
  const getButtonColor = () => {
    switch (variant) {
      case "enter":
        return "bg-blue-500 hover:bg-blue-600";
      case "delete":
        return "bg-red-500 hover:bg-red-600";
      default:
        return "bg-slate-500 hover:bg-slate-600";
    }
  };
  return (
    <button
      className={`m-1 p-4 text-white rounded focus:ring focus:outline-none ${getButtonColor()} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
