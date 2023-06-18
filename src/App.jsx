import React from "react";
import Header from "./components/Header/Header";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";

const App = () => {
  const navigation = useNavigation();

  return (
    <>
      <Header />
      <>
        {navigation.state === "loading" && <LoadingSpinner />}
        <Outlet />
      </>
      <Footer />
    </>
  );
};

export default App;
