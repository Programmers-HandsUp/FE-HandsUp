import Image from "next/image";

function ProfileEdit() {
  return (
    <div className="flex flex-col justify-center items-center gap-3 h-svh m-auto ">
      <div className="animate-bounce">
        <Image
          src="/assets/images/logo.webp"
          width={200}
          height={200}
          alt="Hands Up Logo"
        />
      </div>
      <p>페이지 작업 중입니다.</p>
    </div>
  );
}

export default ProfileEdit;
