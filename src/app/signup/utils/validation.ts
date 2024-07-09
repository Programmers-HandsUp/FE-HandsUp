import { z } from "zod";

export const SignUpFormSchema = z
  .object({
    email: z
      .string()
      .email({ message: "올바른 이메일 형식을 입력해주세요." })
      .max(30, { message: "30글자 미만으로 입력해해주세요" }),
    password: z
      .string()
      .min(8, { message: "최소 8글자 이상 입력해주세요" })
      .max(20, { message: "20글자 이하로 입력해주세요" }),
    checkPassword: z
      .string()
      .min(8, { message: "최소 8글자 이상 입력해주세요" })
      .max(20, { message: "20글자 이하로 입력해주세요" }),
    nickname: z
      .string()
      .min(2, { message: "닉네임은 최소 2글자 이상 입력해주세요" })
      .max(12, { message: "닉네임은 최대 12글자 이하로 입력해주세요" }),
    profileImageUrl: z.string().optional(),
    si: z.string(),
    gu: z.string(),
    dong: z.string(),
    selectedCategories: z.array(z.string())
  })
  .refine(({ password, checkPassword }) => password !== checkPassword, {
    message: "입력하신 두 비밀번호가 서로 다릅니다."
  });
