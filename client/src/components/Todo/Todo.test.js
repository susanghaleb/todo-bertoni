import React from "react";
import renderer from "react-test-renderer";
import Todo from "./Todo";

it("renders correctly", () => {
  const taskMock = {
    label: "ONE",
    id: 87679,
    done: false
  };

  const mockFunction = jest.fn();
  const tree = renderer
    .create(
      <Todo task={taskMock} onCheck={mockFunction} onDelete={mockFunction} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
