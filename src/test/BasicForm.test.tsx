import { render, screen } from "@testing-library/react";
import { BasicForm } from "../components/BasicForm";
import userEvent from "@testing-library/user-event";

describe("BasicForm Component", () => {
  it("renders form inputs and submit button", () => {
    render(<BasicForm />);

    expect(screen.getByTestId("field-name")).toBeInTheDocument();
    expect(screen.getByTestId("field-surname")).toBeInTheDocument();
    expect(screen.getByTestId("field-income")).toBeInTheDocument();
    expect(screen.getByTestId("field-outcome")).toBeInTheDocument();
    expect(screen.getByTestId("submit-button")).toBeInTheDocument();
  });

  it("shows validation errors if fields are empty and user submits", async () => {
    render(<BasicForm />);

    const submitButton = screen.getByTestId("submit-button");

    await userEvent.click(submitButton);

    const errors = await screen.findAllByText(/required/i);
    expect(errors.length).toBe(4);
  });

  it("fills the form and submits correctly", async () => {
    render(<BasicForm />);

    const nameField = screen.getByTestId("field-name");
    const surnameField = screen.getByTestId("field-surname");
    const incomeField = screen.getByTestId("field-income");
    const outcomeField = screen.getByTestId("field-outcome");
    const submitButton = screen.getByTestId("submit-button");

    await userEvent.type(nameField, "John");
    await userEvent.type(surnameField, "Doe");
    await userEvent.type(incomeField, "5000");
    await userEvent.type(outcomeField, "2000");

    await userEvent.click(submitButton);

    const errors = screen.queryAllByText(/required/i);
    expect(errors.length).toBe(0);
  });
});
