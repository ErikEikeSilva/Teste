import { useState } from "react";

const estadoInicial = {
  nome: "",
  email: "",
  mensagem: "",
};

function FormContato() {
  const [formulario, setFormulario] = useState(estadoInicial);
  const [erros, setErros] = useState({});
  const [enviado, setEnviado] = useState(false);

  function atualizarCampo(evento) {
    const { name, value } = evento.target;

    setFormulario((dadosAtuais) => ({
      ...dadosAtuais,
      [name]: value,
    }));
  }

  function validarFormulario() {
    const novosErros = {};

    if (!formulario.nome.trim()) {
      novosErros.nome = "Nome é obrigatório";
    }

    if (!formulario.email.trim() || !formulario.email.includes("@")) {
      novosErros.email = "Email inválido";
    }

    if (formulario.mensagem.trim().length < 10) {
      novosErros.mensagem = "Mensagem muito curta";
    }

    return novosErros;
  }

  function enviarFormulario(evento) {
    evento.preventDefault();

    const errosEncontrados = validarFormulario();
    setErros(errosEncontrados);

    if (Object.keys(errosEncontrados).length > 0) {
      setEnviado(false);
      return;
    }

    setEnviado(true);
    setFormulario(estadoInicial);
  }

  return (
    <section className="contato" aria-labelledby="titulo-contato">
      <div className="container">
        <h2 id="titulo-contato" className="section-title">
          Fale Conosco
        </h2>

        <form className="form-contato" onSubmit={enviarFormulario} noValidate>
          <div className="form-campo">
            <label htmlFor="nome">Nome</label>
            <input
              id="nome"
              name="nome"
              type="text"
              value={formulario.nome}
              onChange={atualizarCampo}
            />
            {erros.nome && <p className="form-erro">{erros.nome}</p>}
          </div>

          <div className="form-campo">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formulario.email}
              onChange={atualizarCampo}
            />
            {erros.email && <p className="form-erro">{erros.email}</p>}
          </div>

          <div className="form-campo">
            <label htmlFor="mensagem">Mensagem</label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows="5"
              value={formulario.mensagem}
              onChange={atualizarCampo}
            />
            {erros.mensagem && <p className="form-erro">{erros.mensagem}</p>}
          </div>

          <button type="submit" className="btn-primary">
            Enviar
          </button>

          {enviado && (
            <p className="form-sucesso" role="status">
              Mensagem enviada com sucesso
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default FormContato;
