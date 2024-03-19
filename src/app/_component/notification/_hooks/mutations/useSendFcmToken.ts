import { useMutation } from "@tanstack/react-query";

import Toast from "@/app/_component/common/Toast";

import { sendFCMToken } from "../../_api/notification";

export const useSendFcmToken = () => {
  const { show } = Toast();
  const sendFcmTokenMutation = useMutation({
    mutationFn: sendFCMToken,
    onError() {
      show("오류가 발생했습니다", "warn-solid");
    }
  });

  return {
    mutateSendFcmToken: sendFcmTokenMutation.mutate
  };
};
