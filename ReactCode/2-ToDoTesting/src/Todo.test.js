// src/Todo.test.js
import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Todo from "./Todo.js";

test("renders Todo component", () => {
  render(<Todo />);
  const headerElement = screen.getByText(/todo app/i);
  expect(headerElement).toBeInTheDocument();
});

test("adds and removes todos", () => {
  render(<Todo />);

  // Add Todo
  const inputElement = screen.getByRole("textbox");
  const addButton = screen.getByText(/add todo/i);

  fireEvent.change(inputElement, { target: { value: "New Todo" } });
  fireEvent.click(addButton);

  const todoElement = screen.getByText(/new todo/i);
  expect(todoElement).toBeInTheDocument();

  // Remove Todo
  const removeButton = screen.getByText(/remove/i);
  fireEvent.click(removeButton);

  expect(todoElement).not.toBeInTheDocument();
});
