import React from "react";
import { DnDBuilder, useTools, item, branch } from "build-ui";
import { Button } from "react-bootstrap";

const CheckBoxTools = () => {
  const tools = useTools();
  const handleDragTool = () => {
    const checkbox = item({
      type: "CheckBox",
    });
    const data = branch(checkbox);
    tools.triggerDragStart({
      data: data,
    });
  };
  return (
    <DnDBuilder
      onDragStart={handleDragTool}
      onDragEnd={tools.handleDragEnd}
      draggable={true}
    >
      <Button>CheckBox</Button>
    </DnDBuilder>
  );
};

export default CheckBoxTools;
