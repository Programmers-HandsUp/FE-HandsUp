import { z } from "zod";

export const SignUpFormSchema = z.object({
  email: z.string(),
  password: z.string(),
  nickname: z.string(),
  profileImageUrl: z.string(),
  si: z.string(),
  gu: z.string(),
  dong: z.string(),
  productCategoryIds: z.array(z.string())
});
