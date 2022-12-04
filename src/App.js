import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { MainRoutes as Routes } from "./routes/MainRoutes";
import { Global } from "./styles/Global";

function App() {
  return (
    <>
      <Global />
      <ToastContainer theme="dark" autoClose={3000} />
      <Routes />
    </>
  );
}

export default App;
