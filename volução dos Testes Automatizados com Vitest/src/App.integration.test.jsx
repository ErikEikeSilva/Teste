import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App - integração da landing page", () => {
  it("renderiza a estrutura principal da página", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: "Oliveira & Mendes Advocacia" })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Início" })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "Defesa jurídica estratégica com ética e excelência",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Áreas de Atuação" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Sobre o Escritório" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Fale Conosco" })
    ).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toHaveTextContent(
      "Oliveira & Mendes Advocacia"
    );
  });

  it("permite preencher, enviar e limpar o formulário de contato", async () => {
    const user = userEvent.setup();

    render(<App />);

    const nome = screen.getByLabelText(/nome/i);
    const email = screen.getByLabelText(/email/i);
    const mensagem = screen.getByLabelText(/mensagem/i);

    await user.type(nome, "Carlos Lima");
    await user.type(email, "carlos@email.com");
    await user.type(mensagem, "Quero agendar uma consulta sobre contrato.");
    await user.click(screen.getByRole("button", { name: /enviar/i }));

    expect(screen.getByText("Mensagem enviada com sucesso")).toBeInTheDocument();
    expect(nome).toHaveValue("");
    expect(email).toHaveValue("");
    expect(mensagem).toHaveValue("");
  });
});
