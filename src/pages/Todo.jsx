import React from "react";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

export default function Todo() {
  const [todo, setTodo] = React.useState([]);
const [todoText, setTodoText] = React.useState("");

const saveHandler = (e) => {
  setTodo([...todo,todoText]);
}

const onTextKeyUpHandler = (e) => {
setTodoText(e.target.value);
}
  return (
    <div className="container my-4">
      <div className="col-lg-4">
        <div className="todo-input">
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Enter your task"
              aria-label="Todo Item"
              aria-describedby="basic-addon2"
              onKeyUp={onTextKeyUpHandler}
            />
            <Button onClick={saveHandler} variant="outline-secondary" id="button-addon2">
              Button
            </Button>
          </InputGroup>
        </div>

        <div className="todo-list">
          <Table striped bordered hover>
            <tbody>
              {todo.map((el) => (
                <tr>
                  <td>{el}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
