import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import FormContato from "./FormContato";

describe("FormContato", () => {
  it("mostra erros ao enviar o formulário vazio", async () => {
    const user = userEvent.setup();

    render(<FormContato />);

    await user.click(screen.getByRole("button", { name: /enviar/i }));

    expect(screen.getByText("Nome é obrigatório")).toBeInTheDocument();
    expect(screen.getByText("Email inválido")).toBeInTheDocument();
    expect(screen.getByText("Mensagem muito curta")).toBeInTheDocument();
  });

  it("mostra erro quando o email não possui @", async () => {
    const user = userEvent.setup();

    render(<FormContato />);

    await user.type(screen.getByLabelText(/nome/i), "Ana Souza");
    await user.type(screen.getByLabelText(/email/i), "ana.email.com");
    await user.type(
      screen.getByLabelText(/mensagem/i),
      "Preciso de uma orientação jurídica."
    );
    await user.click(screen.getByRole("button", { name: /enviar/i }));

    expect(screen.getByText("Email inválido")).toBeInTheDocument();
  });

  it("mostra erro quando a mensagem tem menos de 10 caracteres", async () => {
    const user = userEvent.setup();

    render(<FormContato />);

    await user.type(screen.getByLabelText(/nome/i), "Ana Souza");
    await user.type(screen.getByLabelText(/email/i), "ana@email.com");
    await user.type(screen.getByLabelText(/mensagem/i), "Ajuda");
    await user.click(screen.getByRole("button", { name: /enviar/i }));

    expect(screen.getByText("Mensagem muito curta")).toBeInTheDocument();
  });

  it("mostra mensagem de sucesso e limpa os campos no envio válido", async () => {
    const user = userEvent.setup();

    render(<FormContato />);

    const nome = screen.getByLabelText(/nome/i);
    const email = screen.getByLabelText(/email/i);
    const mensagem = screen.getByLabelText(/mensagem/i);

    await user.type(nome, "Ana Souza");
    await user.type(email, "ana@email.com");
    await user.type(mensagem, "Gostaria de agendar uma consulta.");
    await user.click(screen.getByRole("button", { name: /enviar/i }));

    expect(screen.getByText("Mensagem enviada com sucesso")).toBeInTheDocument();
    expect(nome).toHaveValue("");
    expect(email).toHaveValue("");
    expect(mensagem).toHaveValue("");
  });
});
