import { useForm } from "react-hook-form";

import Icon from "@/app/_component/common/Icon";

export interface FormDataType {
  message: string;
}

interface ChatMessageInputProps {
  onSubmit: (data: FormDataType) => void;
}

const ChatMessageInput = ({ onSubmit }: ChatMessageInputProps) => {
  const { register, handleSubmit, reset } = useForm<FormDataType>({
    mode: "onSubmit"
  });

  const onSubmitWithReset = (data: FormDataType) => {
    onSubmit(data);
    reset();
  };

  return (
    <div className="w-full h-full">
      <form onSubmit={handleSubmit(onSubmitWithReset)}>
        <div className="flex rounded-lg border-2 border-gray-300">
          <input
            type="text"
            placeholder="메시지 입력해주세요"
            {...register("message", { required: true })}
            className=" py-2 px-2 w-full"
          />
          <button>
            <Icon id="message-send" />
          </button>
        </div>
      </form>
    </div>
  );
};
export default ChatMessageInput;
