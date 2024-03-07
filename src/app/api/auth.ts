type LoginFormValues = {
  email: string;
  password: string;
};

const setLogin = async (authData: LoginFormValues): Promise<any> => {
  const response = await fetch("http://localhost:9090/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(authData)
  });
  if (response.ok) {
    const token = await response.json();
    return token;
  }
  throw new Error(response.status.toString());
};

const signUp = async (authData: LoginFormValues): Promise<any> => {
  const response = await fetch("http://localhost:9090/api/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(authData)
  });
  if (response.ok) {
    const token = await response.json();
    return token;
  }
  throw new Error(response.status.toString());
};

const idduplicatecheck = async (id: string): Promise<any> => {
  const req = await fetch(`http://localhost:9090/api/idduplicatecheck/${id}`, {
    method: "GET"
  });
  if (req.ok) {
    return req.ok;
  }
  throw new Error(req.status.toString());
};
export { setLogin, signUp, idduplicatecheck };
