import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import PharmaProducts from "../Pages/Pharma-products";
import PharmasPage from "../Pages/Pharmas-page";
import RegisterSeller from "../Pages/Register-seller";
import RegisterUser from "../Pages/Register-user";

const Rotas = () => {
  /* const [auth, setAuth] = useState();
  console.log(auth);
  useEffect(() => {
    const isPharmacy = JSON.parse(localStorage.getItem("@userData"));

    if (isPharmacy !== null) {
      if (isPharmacy.isPharmacy) {
        setAuth(true);
      }
    }
  }, [auth]); */

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login /* auth={auth} setAuth={setAuth}  *//>} />
      <Route path="/dashboard" element={<Dashboard /* auth={auth} */ />} />
      <Route path="/pharmaProducts/:id" element={<PharmaProducts />} />
      <Route path="/pharmas" element={<PharmasPage />} />
      <Route path="/registerSeller" element={<RegisterSeller />} />
      <Route path="/registerUser" element={<RegisterUser />} />
    </Routes>
  );
};

export default Rotas;
