import React from "react";
import "./App.css";
import Card from "./components/shared/compound/Card";
import MouseTrackerBox from "./components/shared/render-props/MouseTracker";
import Tree from "./components/shared/recursive/TreeObj";
import Form from "./components/shared/Form";
import { DangerButton } from "./components/shared/partiallyApply/Button";
import DebouncedInput from "./components/shared/DebouncedInput";

const data = [
  {
    id: 1,
    label: "Root",
    children: [
      { id: 2, label: "Child 1", children: [] },
      {
        id: 3,
        label: "Child 2",
        children: [
          { id: 4, label: "Grandchild 1", children: [] },
          { id: 5, label: "Grandchild 2", children: [] },
        ],
      },
    ],
  },
];
function App() {
  return (
    <>
      <MouseTrackerBox sx={{ width: "500px", height: "300px" }} />
      <Card>
        <Card.Header title={"Compound Pattern"} />
        <Card.Body>
          <>
          <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
            {" "}
            All Stuffs
          </h2>
          <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
            <li>List</li>
            <li>List</li>
          </ul></>
        </Card.Body>
        <Card.Footer title={"Footer"} />
      </Card>
      <Tree data={data} />
      <Form />
      <DangerButton text="Danger" size="large"/>

      <DebouncedInput/>
    </>
  );
}

export default App;
