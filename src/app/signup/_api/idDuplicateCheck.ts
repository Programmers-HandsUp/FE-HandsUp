export const idDuplicateCheck = async (id: string): Promise<boolean> => {
  const req = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/check-email?email=${id}`,
    {
      method: "GET"
    }
  );
  if (req.ok) {
    return req.ok;
  }
  throw new Error(req.status.toString());
};
