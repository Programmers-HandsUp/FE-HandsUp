"use client";

interface SignupHeaderProps {
  nowNavigate: "Residence" | "Category" | "Profile";
}

const SignupHeader = ({ nowNavigate }: SignupHeaderProps) => {
  return (
    <header className="flex justify-between">
      <button>왼쪽</button>
      <span className="w-3/5 h-[2rem] bg-blue-200"></span>
      <button>오른쪽</button>
    </header>
  );
};

export default SignupHeader;
