import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Header from "./Header";

describe("Header", () => {
  it("Renderiza o nome do escritório e os links principais", () => {
    render(<Header />);

    expect(
      screen.getByRole("heading", { name: "Oliveira & Mendes Advocacia" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: "Início" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: "Áreas de Atuação" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: "Sobre" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: "Contato" })
    ).toBeInTheDocument();
  });
});
