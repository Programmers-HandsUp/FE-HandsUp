import { useForm } from "react-hook-form";

export interface FormDataType {
  comment: string;
}

interface CommentProps {
  onSubmit: (data: FormDataType) => void;
}

const CommentInput = ({ onSubmit }: CommentProps) => {
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
          placeholder="댓글을 입력해주세요"
          {...register("comment", { required: true })}
          className="rounded-lg border-2 border-gray-300 grow py px"
        />
        <button
          color="primary"
          className="disabled:bg-gray-500 bg-[#96E4FF] rounded-lg px-2">
          제출
        </button>
      </form>
    </div>
  );
};
export default CommentInput;
