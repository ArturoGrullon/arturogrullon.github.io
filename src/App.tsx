import { AnimatePresence, motion } from "motion/react";
import { LoginWrapper } from "./components/loginWrapper/index.js";
import { Table } from "./components/table/index.js";
import { mockDogs } from "./mocks/dogs/index.js";
import "../pixel-retroui-setup.js";
import "./App.css";
import { Input } from "pixel-retroui";

function App() {
  return (
    <AnimatePresence>
      <LoginWrapper>
        {(user) => (
          <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Input placeholder="Search" autoFocus />
            <Table dogs={mockDogs} />
          </motion.main>
        )}
      </LoginWrapper>
    </AnimatePresence>
  );
}

export default App;
