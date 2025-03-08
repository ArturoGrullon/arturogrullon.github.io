import { AnimatePresence, motion } from "motion/react";
import { LoginWrapper } from "./components/loginWrapper/index.js";
import "../pixel-retroui-setup.js";
import "./App.css";

function App() {
  return (
    <AnimatePresence>
      <LoginWrapper>
        {(user) => (
          <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {user.username}
          </motion.main>
        )}
      </LoginWrapper>
    </AnimatePresence>
  );
}

export default App;
