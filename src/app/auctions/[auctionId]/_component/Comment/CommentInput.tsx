import { useForm } from "react-hook-form";

export interface FormDataType {
  comment: string;
}

interface CommentProps {
  onSubmit: (data: FormDataType) => void;
  isLogin: boolean;
}

const CommentInput = ({ onSubmit, isLogin }: CommentProps) => {
  const { register, handleSubmit, reset } = useForm<FormDataType>({
    mode: "onSubmit"
  });

  const onSubmitWithReset = (data: FormDataType) => {
    onSubmit(data);
    reset();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmitWithReset)}
        className="flex">
        <input
          type="text"
          placeholder={
            isLogin ? "댓글을 입력해주세요" : "로그인 후 이용해주세요"
          }
          {...register("comment", { required: true })}
          className="rounded-lg border-2 border-gray-300 grow py px"
        />
        <button
          disabled={!isLogin}
          className="disabled:bg-gray-500 bg-[#96E4FF] rounded-lg px-2">
          입력
        </button>
      </form>
    </div>
  );
};
export default CommentInput;
