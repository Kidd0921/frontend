type ButtonProps = {
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ icon, onClick, className = "" }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center px-2 py-2 rounded-full border transition-colors duration-200 ${className}`}
    >
      {icon}
    </button>
  );
};

export default Button