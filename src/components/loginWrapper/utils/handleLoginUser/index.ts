import { FormEvent } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { User } from "../../types";

export const handleLoginUser =
  (setUser: (user: User) => void) =>
  async (formEvent: FormEvent<HTMLFormElement>) => {
    try {
      formEvent.preventDefault();
      const formData = new FormData(formEvent.currentTarget);
      const user = Object.fromEntries(formData.entries()) as User;
      const url = `${import.meta.env.VITE_BASE_URL}/auth/login`;
      await axios.post(url, user, { withCredentials: true });
      toast.success("Login successful");
      setUser(user);
    } catch (error) {
      if (!navigator.onLine) return toast.error("No internet connection");

      if (axios.isAxiosError(error))
        toast.error("Invalid format, please update your credentials");
    }
  };
