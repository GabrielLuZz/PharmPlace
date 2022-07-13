import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { FaRegEdit } from "react-icons/fa";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "../Add/style";
import { createTheme } from "@mui/material/styles";
import api from "../../../../services/api";
import { toast } from "react-toastify";
import { ProductsContext } from "../../../../Providers/products";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "#4357AC",
  borderRadius: "4px",
  boxShadow: 24,
  p: 4,
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    seconday: {
      main: "#000",
    },
  },
});

const ModalEdit = ({ product: { id, name, category, image, price } }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório").min(4),
    price: yup.number().required("Campo obrigatório"),
    image: yup.string().required("Campo obrigatório"),
    category: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { products, setProducts } = React.useContext(ProductsContext);

  const formData = (data) => {
    const productAltered = products.map((el) => {
      if (el.id === id) {
        el.category = data.category;
        el.image = data.image;
        el.name = data.name;
        el.price = data.price;
        return el;
      }
      return el;
    });

    api
      .patch(`/products/${id}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@userToken")}`,
        },
      })
      .then((resp) => {
        toast.success("Produto atualizado!");
        setProducts(productAltered);
        handleClose();
      })
      .catch((error) => {
        toast.error(error.response.data);
      });
  };

  return (
    <div>
      <Button theme={theme} onClick={handleOpen}>
        <FaRegEdit size="20px" />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Form action="" onSubmit={handleSubmit(formData)}>
            <label htmlFor="">Nome do Produto</label>
            <input type="text" defaultValue={name} {...register("name")} />
            <span className="error">{errors.name?.message}</span>
            <label htmlFor="">Preço</label>
            <input defaultValue={price} type="text" {...register("price")} />
            <span className="error">{errors.price?.message}</span>

            <label htmlFor="">Imagem</label>
            <input type="text" defaultValue={image} {...register("image")} />
            <span className="error">{errors.image?.message}</span>
            <label htmlFor="">Categoria</label>
            <select
              name=""
              id=""
              {...register("category")}
              defaultValue={category}
            >
              <option value="">Selecione a categoria</option>
              <option value="medicamentos">Medicamentos</option>
              <option value="saude">Saúde</option>
              <option value="beleza">Beleza</option>
              <option value="dermocosmeticos">Dermocosméticos</option>
              <option value="higiene">Higiene</option>
              <option value="infantil">Infantil</option>
              <option value="conveniencia">Conveniência</option>
            </select>
            <span className="error">{errors.categoria?.message}</span>

            <button type="submit">ATUALIZAR</button>
          </Form>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalEdit;
