import { useMutation } from "@tanstack/react-query";

import { idDuplicateCheck } from "../../_api/idDuplicateCheck";

export const useIdDuplicateCheck = (
  setIdStatus: (status: "Empty" | "Change" | "Ok" | "Warn") => void
) => {
  return useMutation({
    mutationFn: (id: string) => idDuplicateCheck(id),
    onSuccess: (data) => {
      if (data.isAvailable) {
        setIdStatus("Ok");
      } else {
        setIdStatus("Warn");
      }
    },
    onError: () => {
      setIdStatus("Warn");
    }
  });
};
