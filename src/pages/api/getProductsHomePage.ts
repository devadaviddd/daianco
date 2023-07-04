import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../../supabase";

export type Product = {
  id: number;
  name?: string;
  des?: string;
  image_url?: string;
  created_at?: string;
  short_name?: string;
};

export default async function getProductsHomePage(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  let { data, error } = await supabase.from("product").select(
    'id, short_name, image_url'
  );
  if (error) return res.status(401).json({ error: error.message });
  let products: Product[] = data!;
  return res.status(200).json(products);
}
