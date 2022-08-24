import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import qrCode from "./../../../../Assets/qrcode.svg";
import { Container, ContainerAll, Pix } from "./style";
import { toast } from "react-toastify";
import { useContext } from "react";
import { CartContext, CartProvider } from "./../../../../Providers/Cart/index";
import { valueToPercent } from "@mui/base";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#F4F4F4",
  borderRadius: "4px",
  boxShadow: 24,
  p: 4,
};

export default function Payment() {
  const { toggleDrawer } = useContext(CartContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const { setCart } = useContext(CartContext);

  const finish = (e) => {
    if (value) {
      toast.success("Compra finalizada com sucesso!");
      setCart([]);
      toggleDrawer("right", false, e);
      handleClose();
    } else {
      toast.error("Selecionar uma opção valida");
    }
  };

  return (
    <ContainerAll>
      <Button onClick={handleOpen} className="btnPag">Realizar pagamento</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h3>Selecione a forma de pagamento</h3>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel value="pix" control={<Radio />} label="Pix" />
              <FormControlLabel
                value="cartao"
                control={<Radio />}
                label="Cartao"
              />
            </RadioGroup>
          </FormControl>
          {value === "" ? (
            <></>
          ) : value === "pix" ? (
            <Pix>
              <h4>Escanei o qr code abaixo para pagamento</h4>
              <img src={qrCode} alt="" />
              <button onClick={(e) => finish(e)}>Finalizar compra</button>
            </Pix>
          ) : (
            <Container>
              <img
                src="https://t3.ftcdn.net/jpg/02/34/61/18/360_F_234611856_NMLpM3zUeUFKBWrCaw9M9RZs7Ga38xjM.jpg"
                alt=""
              />
              <button onClick={(e) => finish(e)}>Finalizar compra</button>
            </Container>
          )}
        </Box>
      </Modal>
    </ContainerAll>
  );
}
