import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App - dark mode", () => {
  it("alterna entre tema claro e tema escuro", async () => {
    const user = userEvent.setup();

    render(<App />);

    const areaTema = screen.getByRole("group", {
      name: "Tema da aplicação",
    });
    const botao = screen.getByRole("button", { name: "Alternar Tema" });

    expect(screen.getByRole("status")).toHaveTextContent("Tema claro");
    expect(areaTema).toHaveAttribute("data-theme", "claro");
    expect(areaTema).toHaveClass("tema-claro");

    await user.click(botao);

    expect(screen.getByRole("status")).toHaveTextContent("Tema escuro");
    expect(areaTema).toHaveAttribute("data-theme", "escuro");
    expect(areaTema).toHaveClass("tema-escuro");

    await user.click(botao);

    expect(screen.getByRole("status")).toHaveTextContent("Tema claro");
    expect(areaTema).toHaveAttribute("data-theme", "claro");
    expect(areaTema).toHaveClass("tema-claro");
  });
});
