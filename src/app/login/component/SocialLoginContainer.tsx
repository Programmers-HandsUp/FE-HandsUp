const SocialLoginContainer = () => {
  return (
    <div>
      <div className="flex flex-col mt-6 w-fit mx-auto">
        <button className="w-[9rem] h-[2.2rem] rounded-md bg-[#96E4FF] my-1">
          구글 로그인
        </button>
        <button className="w-[9rem] h-[2.2rem] rounded-md bg-[#96E4FF]">
          카카오 로그인
        </button>
      </div>
    </div>
  );
};

export default SocialLoginContainer;
