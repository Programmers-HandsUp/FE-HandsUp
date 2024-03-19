interface idDuplicateCheckProps {
  isAvailable: boolean;
}

export const idDuplicateCheck = async (
  id: string
): Promise<idDuplicateCheckProps> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/check-email?email=${id}`,
      {
        method: "GET"
      }
    );
    const result = await response.json();
    return result;
  } catch (e) {
    return { isAvailable: false };
  }
};
