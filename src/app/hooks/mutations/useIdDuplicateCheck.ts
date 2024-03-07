import { useMutation } from "@tanstack/react-query";

import { idduplicatecheck } from "@/app/api/auth";
import Toast from "@/app/_component/common/Toast";

export const useIdDuplicateCheck = (
  setIdStatus: (status: "None" | "Change" | "Ok") => void
) => {
  const { show } = Toast();

  return useMutation({
    mutationFn: (id: string) => idduplicatecheck(id),
    onSuccess: () => {
      setIdStatus("Ok");
    },
    onError: (error: Error) => {
      switch (Number(error.message)) {
        case 401:
          setIdStatus("None");
          show("중복된 아이디가 존재합니다!", "warn-solid", 2000);
          break;
      }
    }
  });
};
