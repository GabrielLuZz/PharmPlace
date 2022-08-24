import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { FaRegTrashAlt } from "react-icons/fa";
import { createTheme } from "@mui/material/styles";
import { ProductsContext } from "../../../../Providers/products";
import { useContext } from "react";
import api from "../../../../services/api";
import { toast } from "react-toastify";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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

const ModalDelete = ({ product: { id } }) => {
  const [open, setOpen] = React.useState(false);
  const { removeProduct } = useContext(ProductsContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const token = localStorage.getItem("@userToken");

  const deleteProduct = () => {
    api
      .delete(`/products/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        toast.success("Produto deletado!");
        handleClose();
        removeProduct(id);
      })
      .catch((err) => toast.error(err.response.data));
  };

  return (
    <div>
      <Button theme={theme} onClick={handleClickOpen}>
        <FaRegTrashAlt size="20px" />
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          {"Você realmente deseja deletar esse produto?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button
            onClick={() => {
              deleteProduct();
            }}
          >
            Deletar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ModalDelete;
