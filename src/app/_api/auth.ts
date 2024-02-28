type LoginFormValues = {
  email: string;
  password: string;
};

const setLogin = async (authData: LoginFormValues): Promise<any> => {
  const req = await fetch("http://localhost:9090/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(authData)
  });
  if (req.ok) {
    const token = await req.json();
    return token;
  }
  throw new Error(req.status.toString());
};
export { setLogin };
