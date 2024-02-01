interface InputProps {
  inputType: string;
  holder?: string;
  id: string;
  text: string;
  warning: string;
  isTargetValid?: boolean;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputWrap({ inputType, holder, id, text, handleInput, warning, isTargetValid }: InputProps) {
  return (
    <div className="mt-[4px]">
      <label htmlFor={id} className="font-bold">
        {text}
      </label>
      <input
        type={inputType}
        placeholder={holder}
        id={id}
        className="w-full py-[4px] border-b-[1px] border-gray-400 focus:outline-0"
        onChange={handleInput}
      />
      <p className={`text-sm text-red-300 ${isTargetValid ? 'opacity-0' : 'opacity-1'}`}>* {warning}</p>
    </div>
  );
}
