import React from "react";
import renderer from "react-test-renderer";
import CreateTask from "./CreteTask";

it("renders correctly", () => {
  const mockFunction = jest.fn();
  const tree = renderer
    .create(<CreateTask submitTask={mockFunction} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
