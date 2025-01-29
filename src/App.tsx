import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/ LoginForm";


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Defina as rotas aqui */}
        <Route path="/login" element={<LoginForm />} />
        {/* Adicione outras rotas conforme necessário */}
      </Routes>
    </Router>
  );
};

export default App;
