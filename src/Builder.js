//this file for assembly and render all using elements

import React, { useState } from "react";
import { Builder, Workspace, item, branch } from "build-ui";
import { ListGroup, Button, Modal } from "react-bootstrap";
import AlertTools from "./components/AlterTools";
import { AlertView } from "./viewComponents/AlertView";
import { SectionView } from "./viewComponents/SectionView";
import InputTools from "./components/InputTools";
import { InputView } from "./viewComponents/InputView";
import CheckBoxTools from "./components/CheckBoxTools";
import { CheckBoxView } from "./viewComponents/CheckBoxView";
import ListBoxTools from "./components/ListBoxTools";
import { ListBoxView } from "./viewComponents/ListBoxView";
import ComboBoxTools from "./components/ComboBoxTools";
import { ComboBoxView } from "./viewComponents/ComboBoxView";
import RadioButtonsTools from "./components/RadioButtonsTools";
import { RadioButtonsView } from "./viewComponents/RadioButtonsView";
import { SectionLabelView } from "./viewComponents/SectionLabelView";
import { TableGridView } from "./viewComponents/TableGridView";
import TableGridTools from "./components/TableGridTools";
import TopBar from "./TopBar";
import { TableRowView } from "./viewComponents/TableRowView";
import { TableDataView } from "./viewComponents/TableDataView";
import WorkSpace from "./WorkSpace";
import "./App.css";
//renders all elements
const MyBuilder = () => {
  const section = item({
    type: "Section",
    props: {},
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const tree = branch(section);

  const view = {
    Alert: AlertView,
    Section: SectionView,
    Input: InputView,
    CheckBox: CheckBoxView,
    ListBox: ListBoxView,
    ComboBox: ComboBoxView,
    RadioButtons: RadioButtonsView,
    SectionLabel: SectionLabelView,
    TableGrid: TableGridView,
    TableRow: TableRowView,
    TableData: TableDataView,
  };

  return (
    <>
      <Builder initialTree={tree}>
        <TopBar />
        <div className="previewButton">
          <Button variant="outline-secondary" onClick={handleShow}>
            Preview
          </Button>
        </div>

        <div>
          <Modal show={show} onHide={handleClose} size="xl">
            <Modal.Header className="modalHeaderPreview" closeButton>
              <h3> Preview</h3>
            </Modal.Header>

            <Modal.Body className="modulBodyPreview">
              <WorkSpace />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>

        <Workspace view={view} />

        <div className="draggbleElements">
          <div className="mt-0">
            <ListGroup>
              <ListGroup.Item>
                <AlertTools />
              </ListGroup.Item>
              <ListGroup.Item>
                <InputTools />
              </ListGroup.Item>
              <ListGroup.Item>
                <CheckBoxTools />
              </ListGroup.Item>
              <ListGroup.Item>
                <ListBoxTools />
              </ListGroup.Item>
              <ListGroup.Item>
                <ComboBoxTools />
              </ListGroup.Item>
              <ListGroup.Item>
                <RadioButtonsTools />
              </ListGroup.Item>
              <ListGroup.Item>
                <TableGridTools />
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>
      </Builder>
    </>
  );
};

export default MyBuilder;