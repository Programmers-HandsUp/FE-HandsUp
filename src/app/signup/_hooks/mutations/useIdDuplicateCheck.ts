import { useMutation } from "@tanstack/react-query";

import Toast from "@/app/_component/common/Toast";

import { idDuplicateCheck } from "../../_api/idDuplicateCheck";

export const useIdDuplicateCheck = (
  setIdStatus: (status: "None" | "Change" | "Ok") => void
) => {
  const { show } = Toast();

  return useMutation({
    mutationFn: (id: string) => idDuplicateCheck(id),
    onSuccess: (data) => {
      if (data.isAvailable) {
        setIdStatus("Ok");
      } else {
        setIdStatus("None");
        show("해당 이메일은 사용이 불가능합니다", "warn-solid", 3000);
      }
    },
    onError: (error: Error) => {
      setIdStatus("None");
    }
  });
};
