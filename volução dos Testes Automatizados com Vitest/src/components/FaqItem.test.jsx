import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import FaqItem from "./FaqItem";

describe("FaqItem", () => {
  it("abre e fecha a resposta ao clicar", async () => {
    const user = userEvent.setup();

    render(
      <FaqItem
        pergunta="O escritório atende online?"
        resposta="Sim, atendemos clientes em todo o Brasil."
      />
    );

    expect(
      screen.getByRole("button", { name: "O escritório atende online?" })
    ).toBeInTheDocument();
    expect(
      screen.queryByText("Sim, atendemos clientes em todo o Brasil.")
    ).not.toBeInTheDocument();

    await user.click(
      screen.getByRole("button", { name: "O escritório atende online?" })
    );

    expect(
      screen.getByText("Sim, atendemos clientes em todo o Brasil.")
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", { name: "O escritório atende online?" })
    );

    expect(
      screen.queryByText("Sim, atendemos clientes em todo o Brasil.")
    ).not.toBeInTheDocument();
  });
});
