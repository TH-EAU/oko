import User from "@/models/User";
import { useQuery } from "react-query";
import keyFactory from "./keyFactory";
import { getUserById } from "@/services/user.service";

export const useUserDetails = (userId: number) => {
  return useQuery<User, Error>({
    queryKey: keyFactory.userKeys.detail(userId),
    queryFn: () => getUserById(userId),
  });
};
