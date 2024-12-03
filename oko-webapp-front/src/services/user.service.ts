import User from "@/models/User";
import axios from "axios";

export const getUserById = async (userId: number): Promise<User> => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/${userId}`
  );
  return res.data;
};
