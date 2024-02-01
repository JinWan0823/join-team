import SignUpForm from '@/app/_components/login/SignUpForm';

export default function Wrap() {
  return (
    <div className="w-full">
      <h1 className="font-bold text-xl">회원가입</h1>
      <SignUpForm />
    </div>
  );
}
