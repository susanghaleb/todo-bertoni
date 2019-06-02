import React from "react";
import renderer from "react-test-renderer";
import ListTodos from "./ListTodos";

it("renders correctly", () => {
  const mockFunction = jest.fn();
  const tree = renderer
    .create(
      <ListTodos tasks={[]} onCheck={mockFunction} onDelete={mockFunction} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
