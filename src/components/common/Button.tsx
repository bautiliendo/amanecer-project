
interface ButtonProps {
    text: string;
    onClick?: () => void;
  }

export const Button: React.FC<ButtonProps> = ({text, onClick}) => {
  return (
    <button 
    className="bg-[#B29A82] text-[#68270C] font-bold px-4 py-2 rounded"
    onClick={onClick}
    >{text}
    </button>
  );
};
