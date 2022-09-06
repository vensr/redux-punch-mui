import { Box } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AlertMessage from "./components/common/AlertMessage";
import EmptyHome from "./components/common/EmptyHome";
import Loading from "./components/common/Loading";
import Footer from "./components/Footer";
import Header from "./components/Header";

const ReduxPunch = () => {

  return (
    <Box>
      <Header />
      <Loading />
      <AlertMessage />
        <Routes>
          <Route path="/" element={<EmptyHome />} />
        </Routes>
      <Footer />
    </Box>
  );
};

export default ReduxPunch;
