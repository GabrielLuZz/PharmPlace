import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/Auth";

export default function MenuPopupState() {
  const {setAuth} = React.useContext(AuthContext)

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const token = localStorage.getItem("@userToken");
  const user = JSON.parse(localStorage.getItem("@userData"));

  const navigate = useNavigate();

  const handleNav = (path, isTrue = false) => {
    navigate(path);

    if (isTrue) {
      localStorage.clear();
      setAuth(false)
    }
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {user?.photo ? (
          <img
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
            }}
            src={user.photo}
          />
        ) : (
          <FaUserCircle />
        )}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {token ? (
          user.isPharmacy ? (
            <div>
              <MenuItem
                onClick={() => {
                  handleNav("/dashboard");
                }}
              >
                Minha Farmácia
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleNav("/login", true);
                }}
              >
                Log Out
              </MenuItem>
            </div>
          ) : (
            <MenuItem
              onClick={() => {
                handleNav("/login", true);
              }}
            >
              Log Out
            </MenuItem>
          )
        ) : (
          <div>
            <MenuItem
              onClick={() => {
                handleNav("/login");
              }}
            >
              Login
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleNav("/login");
              }}
            >
              Cadastro
            </MenuItem>
          </div>
        )}
      </Menu>
    </div>
  );
}

/* import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function MenuPopupState() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Open Popover
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </div>
  );
} */
