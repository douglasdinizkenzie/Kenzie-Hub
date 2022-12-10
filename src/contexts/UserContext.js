import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../api/api";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [isDisabled, setIsDisabled] = useState(false);
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getUser() {
      const token = localStorage.getItem("@TOKEN");

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const request = await api.get("/profile", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        setUser(request.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getUser();
  }, []);

  async function loginSubmit(data) {
    try {
      setIsDisabled(true);
      let request = await api.post("/sessions", data);
      toast.success(`Seja bem vindo ${request.data.user.name}!`);
      localStorage.setItem("@TOKEN", request.data.token);
      localStorage.setItem("@USERID", request.data.user.id);
      setUser(request.data.user);
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.error("Ops, alguma coisa deu errado!");
    } finally {
      setIsDisabled(false);
    }
  }

  async function registerSubmit(data) {
    try {
      setIsDisabled(true);

      let request = await api.post("/users", {
        email: data.email,
        password: data.password,
        name: data.name,
        bio: data.bio,
        contact: data.contact,
        course_module: data.course_module,
      });

      toast.success("Registrado!");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Ops, alguma coisa deu errado!");
    } finally {
      setIsDisabled(false);
    }
  }
  function logOut() {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    setUser(null);
  }

  return (
    <UserContext.Provider
      value={{
        navigate,
        isDisabled,
        setIsDisabled,
        user,
        setUser,
        loginSubmit,
        registerSubmit,
        loading,
        logOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
