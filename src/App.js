import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { TechProvider } from "./contexts/TechContext";
import { UserProvider } from "./contexts/UserContext";
import { MainRoutes as Routes } from "./routes/MainRoutes";
import { Global } from "./styles/Global";

function App() {
  return (
    <>
      <Global />
      <ToastContainer theme="dark" autoClose={3000} />
      <UserProvider>
        <TechProvider>
          <Routes />
        </TechProvider>
      </UserProvider>
    </>
  );
}

export default App;
