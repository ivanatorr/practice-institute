//This file contains all props for draggble element CheckBox that dragging on dropable place

import React from "react";
import { DnDBuilder, useTools, item, branch } from "build-ui";

const CheckBoxTools = () => {
  const tools = useTools();
  const handleDragTool = () => {
    const checkboxProps = {
      label: "CheckBox",
    };
    const checkbox = item({
      type: "CheckBox",
      props: checkboxProps,
    });
    const data = branch(checkbox);
    tools.triggerDragStart({
      data: data,
    });
  };
  return (
    <div className="fontStyle">
      <DnDBuilder
        onDragStart={handleDragTool}
        onDragEnd={tools.handleDragEnd}
        draggable={true}
      >
        <div className="icons">
          <i class="fas fa-check-circle">
            <span className="iconsText">CheckBox</span>
          </i>
        </div>
      </DnDBuilder>
    </div>
  );
};

export default CheckBoxTools;
