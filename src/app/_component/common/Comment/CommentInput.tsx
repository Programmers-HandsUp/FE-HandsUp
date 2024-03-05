import { ICreateComment, createComment } from "@/app/api/createComment";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

export interface IForm {
  comment: string;
}

interface CommentProps {
  onSubmit: (data: IForm) => void;
}

const CommentInput = ({ onSubmit }: CommentProps) => {
  const mutation = useMutation({
    mutationFn: ({ comment, auctionId }: ICreateComment) =>
      createComment({ comment, auctionId })
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IForm>({
    mode: "onSubmit"
  });

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
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
