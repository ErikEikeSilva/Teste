import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FormContato from "./components/FormContato";
import Hero from "./sections/Hero";
import Areas from "./sections/Areas";
import Sobre from "./sections/Sobre";

function App() {
  const [temaEscuro, setTemaEscuro] = useState(false);
  const temaAtual = temaEscuro ? "escuro" : "claro";

  return (
    <div
      className={`app tema-${temaAtual}`}
      data-theme={temaAtual}
      role="group"
      aria-label="Tema da aplicação"
    >
      <Header />
      <div className="theme-controls">
        <button
          type="button"
          className="theme-button"
          onClick={() => setTemaEscuro((estadoAtual) => !estadoAtual)}
        >
          Alternar Tema
        </button>
        <p role="status">Tema {temaAtual}</p>
      </div>
      <Hero />
      <Areas />
      <Sobre />
      <FormContato />
      <Footer />
    </div>
  );
}

export default App;
