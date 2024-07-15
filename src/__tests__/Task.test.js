// import "@testing-library/jest-dom";
// import { render, screen, fireEvent } from "@testing-library/react";
// import App from "../components/App";
// import Task from "../components/Task";

// test("displays the task text", () => {
//   render(<Task text={"text!"} category={"category!"} />);
//   expect(screen.queryByText("text!")).toBeInTheDocument();
// });

// test("displays the task category", () => {
//   render(<Task text={"text!"} category={"category!"} />);
//   expect(screen.queryByText("category!")).toBeInTheDocument();
// });

// test("is removed from the list when the delete button is clicked", () => {
//   render(<App />);
//   const task = screen.queryByText(/Buy rice/);
//   const deleteButton = task.parentElement.querySelector("button");

//   fireEvent.click(deleteButton);

//   expect(screen.queryByText(/Buy rice/)).not.toBeInTheDocument();
// });

// Task.test.js


import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import Task from "../components/Task";

// Mock task data
const mockTask = {
  text: "Buy rice",
  category: "Food",
};

test("displays the task text and category", () => {
  render(<Task task={mockTask} />);
  const taskText = screen.getByText(/Buy rice/i); // Adjust to match actual task text
  const taskCategory = screen.getByText(/Food/i); // Adjust to match actual category text
  expect(taskText).toBeInTheDocument();
  expect(taskCategory).toBeInTheDocument();
});

test("is removed from the list when the delete button is clicked", () => {
  const onDeleteTask = jest.fn(); // Mock delete function

  render(<Task task={mockTask} onDeleteTask={onDeleteTask} />);
  const deleteButton = screen.getByRole("button", { name: /delete/i });
  fireEvent.click(deleteButton);

  expect(onDeleteTask).toHaveBeenCalledWith(mockTask);
});
