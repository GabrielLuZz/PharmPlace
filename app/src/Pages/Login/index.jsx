import { BsShop } from "react-icons/bs";
import { FiUserPlus } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import api from "./../../services/api";
import { toast } from "react-toastify";
import { Container } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FiAlertCircle } from "react-icons/fi";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Providers/Auth";

const Login = () => {
  const { auth, setAuth } = useContext(AuthContext);

  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Email obrigatório")
      .email("Tipo de email inválido"),
    password: yup.string().required("Senha obrigatória"),
  });

  useEffect(() => {
    if (auth) {
      return navigate("/");
    }
  }, [auth]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const navigate = useNavigate();

  const formData = (data) => {
    api
      .post("/login", data)
      .then((resp) => {
        toast.success("Seja bem vindo");
        localStorage.setItem("@userToken", resp.data.accessToken);
        localStorage.setItem("@userData", JSON.stringify(resp.data.user));
        setAuth(true);
        resp.data.user.isPharmacy ? navigate("/dashboard") : navigate("/");
      })
      .catch((error) => {
        toast.error(error.response.data);
      });
  };

  return (
    <Container>
      <div>
        <form action="" onSubmit={handleSubmit(formData)}>
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="email@mail.com"
            {...register("email")}
          />
          <span className="error">
            {errors.email?.message && (
              <>
                <FiAlertCircle />
                {errors.email?.message}
              </>
            )}
          </span>
          <label htmlFor="">Senha</label>
          <input
            type="password"
            placeholder="Senha"
            {...register("password")}
          />
          <span className="error">
            {errors.password?.message && (
              <>
                <FiAlertCircle />
                {errors.password?.message}
              </>
            )}
          </span>
          <button type="submit">LOGIN</button>
        </form>
      </div>
      <hr />
      <div className="options">
        <div className="cadastroLogin">
          <h2>CADASTRO</h2>

          <Link to={"/registerSeller"}>
            <h3>Para vendedores</h3>
            <span>
              <BsShop />
            </span>
          </Link>

          <Link to={"/registerUser"}>
            <h3>Para consumidores</h3>
            <span>
              <FiUserPlus />
            </span>
          </Link>
        </div>
        <div className="home">
          <Link to={"/"}>
            <h2>HOME</h2>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Login;
