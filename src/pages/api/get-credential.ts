import { NextApiRequest, NextApiResponse } from "next";
import { getCredentialUseCase } from "./auth/getCredential.usecase";

export default async function getCredential(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {

  const { inputEmail, inputPassword } = req.body;
  console.log('emailInput', inputEmail);
  console.log('passwordInput', inputPassword);

  const user = await getCredentialUseCase({ inputEmail, inputPassword });
  if (user) {
    return res.status(200).json(user);
  }
  return res.status(401).json({ error: "Wrong credentials" });
}
