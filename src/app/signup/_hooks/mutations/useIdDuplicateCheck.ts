import { useMutation } from "@tanstack/react-query";

import Toast from "@/app/_component/common/Toast";

import { idDuplicateCheck } from "../../_api/idDuplicateCheck";

export const useIdDuplicateCheck = (
  setIdStatus: (status: "Empty" | "Change" | "Ok" | "Warn") => void
) => {
  const { show } = Toast();

  return useMutation({
    mutationFn: (id: string) => idDuplicateCheck(id),
    onSuccess: (data) => {
      if (data.isAvailable) {
        setIdStatus("Ok");
      } else {
        setIdStatus("Warn");
        show("해당 이메일은 사용이 불가능합니다", "warn-solid", 3000);
      }
    },
    onError: () => {
      setIdStatus("Warn");
    }
  });
};
