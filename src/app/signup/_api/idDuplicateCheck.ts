export const idDuplicateCheck = async (id: string): Promise<boolean> => {
  const req = await fetch(`http://localhost:9090/api/idduplicatecheck/${id}`, {
    method: "GET"
  });
  if (req.ok) {
    return req.ok;
  }
  throw new Error(req.status.toString());
};
