import { AnimatePresence } from "motion/react";
import { Toaster } from "react-hot-toast";
import { LoginWrapper } from "./components/loginWrapper/index.js";
import { AppContent } from "./components/appContent/index.js";
import "../pixel-retroui-setup.js";
import "./App.css";

function App() {
  return (
    <AnimatePresence>
      <LoginWrapper key={"login-wrapper"}>
        {({ name }) => <AppContent {...{ name }} />}
      </LoginWrapper>
      <Toaster key={"toaster"} />
    </AnimatePresence>
  );
}

export default App;
