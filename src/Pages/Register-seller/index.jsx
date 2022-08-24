import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "./style";
import { Link, useNavigate } from "react-router-dom";
import api from "./../../services/api";
import { toast } from "react-toastify";
import { useContext, useEffect } from "react";
import { UsersContext } from "../../Providers/users";
import { FiAlertCircle } from "react-icons/fi";

const RegisterSeller = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório").min(4),
    photo: yup.string().required("Campo obrigatório"),
    address: yup.string().required("Campo obrigatório"),
    city: yup.string().required("Campo obrigatório"),
    state: yup.string().required("Campo obrigatório"),
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

  const { setUsers, getUsers } = useContext(UsersContext);
  useEffect(() => {
    getUsers().then((resp) => setUsers(resp));
  }, []);

  const formData = (data) => {
    data["isPharmacy"] = true;
    console.log(data);
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
    <Container>
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
          <label htmlFor="">Nome da Empresa</label>
          <input
            type="text"
            placeholder="Remedios ltda"
            {...register("name")}
          />
          <span className="error">
            {errors.name?.message && (
              <>
                <FiAlertCircle />
                {errors.name?.message}
              </>
            )}
          </span>

          <label htmlFor="">Foto</label>
          <input type="text" placeholder="URL Foto" {...register("photo")} />
          <span className="error">
            {errors.photo?.message && (
              <>
                <FiAlertCircle />
                {errors.photo?.message}
              </>
            )}
          </span>

          <label htmlFor="">Endereço</label>
          <input
            type="text"
            placeholder="Rua das Andorinhas, 420"
            {...register("address")}
          />
          <span className="error">
            {errors.address?.message && (
              <>
                <FiAlertCircle />
                {errors.address?.message}
              </>
            )}
          </span>

          <label htmlFor="">Cidade</label>
          <input type="text" placeholder="Fortaleza" {...register("city")} />
          <span className="error">
            {errors.city?.message && (
              <>
                <FiAlertCircle />
                {errors.city?.message}
              </>
            )}
          </span>

          <label htmlFor="">Estado</label>
          <select name="" id="" {...register("state")}>
            <option>Selecione seu estado</option>
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
          </select>
          <span className="error">
            {errors.state?.message && (
              <>
                <FiAlertCircle />
                {errors.state?.message}
              </>
            )}
          </span>

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

          <label htmlFor="">Confirmação Senha</label>
          <input
            type="password"
            placeholder="Confirmação senha"
            {...register("confirmationPassword")}
          />
          <span className="error">
            {errors.confirmationPassword?.message && (
              <>
                <FiAlertCircle />
                {errors.confirmationPassword?.message}
              </>
            )}
          </span>
          <button type="submit">CADASTRAR</button>
        </form>
      </div>
    </Container>
  );
};

export default RegisterSeller;
