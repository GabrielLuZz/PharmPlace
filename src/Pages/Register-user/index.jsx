import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "../Register-seller/style";
import { Link, useNavigate } from "react-router-dom";
import api from "./../../services/api";
import { toast } from "react-toastify";

const RegisterUser = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório").min(4),
    email: yup
      .string()
      .required("Email obrigatório")
      .email("Tipo de email inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\.*])(?=.{8,})/,
        "Deve conter 8 caraceteres, uma maiúscula, uma minúscula, um número e um caracter especial"
      ),
    confirmationPassword: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password")], "Senhas devem ser iguais"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const navigate = useNavigate();

  const formData = (data) => {
    data["isPharmacy"] = false;
    api
      .post("/users/register", data)
      .then((resp) => {
        toast.success("Conta criada com sucesso!");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      })
      .catch((error) => {
        toast.error(error.response.data);
      });
  };

  return (
    <Container style={{ height: "100vh" }}>
      <div>
        <Link to={"/"}>
          <h2>HOME</h2>
        </Link>
        <Link to={"/login"}>
          <h2>login</h2>
        </Link>
      </div>
      <div>
        <form action="" onSubmit={handleSubmit(formData)}>
          <label htmlFor="">Nome</label>
          <input
            type="text"
            placeholder="Joselito Gonçalves"
            {...register("name")}
          />
          <span className="error">{errors.name?.message}</span>
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="email@mail.com"
            {...register("email")}
          />
          <span className="error">{errors.email?.message}</span>

          <label htmlFor="">Senha</label>
          <input
            type="password"
            placeholder="Senha"
            {...register("password")}
          />
          <span className="error">{errors.password?.message}</span>

          <label htmlFor="">Confirmação Senha</label>

          <input
            type="password"
            placeholder="Confirmação senha"
            {...register("confirmationPassword")}
          />
          <span className="error">{errors.confirmationPassword?.message}</span>
          <button type="submit">CADASTRAR</button>
        </form>
      </div>
    </Container>
  );
};

export default RegisterUser;
