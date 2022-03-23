import service from "..";
import { axiosParams } from "../libs/extends";

export const signUpApi = async (member) => {
  return await service.post("auth/signup", member);
};

export const signInApi = async (member) => {
  return axiosParams("POST", "auth/signin", member);
};

export const signReApi = async () => {
  return await service.get("auth/refresh");
};
