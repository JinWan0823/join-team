interface InputProps {
  inputType: string;
  holder?: string;
  id: string;
  text: string;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  inputType,
  holder,
  id,
  text,
  handleInput,
}: InputProps) {
  return (
    <>
      <label htmlFor={id} className="font-bold">
        {text}
      </label>
      <input
        type={inputType}
        placeholder={holder}
        id={id}
        className="w-full pb-[8px] pt-[4px] border-b-[1px] border-gray-400 focus:outline-0"
        onChange={handleInput}
      />
    </>
  );
}
