import { useState } from "react";

function FaqItem({ pergunta, resposta }) {
  const [aberta, setAberta] = useState(false);

  return (
    <div className="faq-item">
      <button
        type="button"
        className="faq-question"
        aria-expanded={aberta}
        onClick={() => setAberta((estadoAtual) => !estadoAtual)}
      >
        {pergunta}
      </button>

      {aberta && <p>{resposta}</p>}
    </div>
  );
}

export default FaqItem;
