import { Outlet } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div className="flex flex-col h-[100vh]">
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default Root;
