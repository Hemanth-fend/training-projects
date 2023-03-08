import { Button, Row, Col, ListGroup } from "react-bootstrap";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { AddTodoAction, RemoveTodoAction } from "../../redux/action-creators/TodoActions";

function Todo() {
  const [todo, setTodo] = useState();

  const dispatch = useDispatch();

  const Todo = useSelector((state) => state.ToDo.todos);
  // const { todos } = Todo;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo));
  };
  
  const removeHandler = (index)=>{
    dispatch(RemoveTodoAction(index))
  }
  return (
    <div style={{ margin: "50px" }}>
      <h3>Todo App</h3>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Control
              // readOnly = {false}
              type="text"
              id=""
              style={{ width: "45rem" }}
              onChange={(e) => setTodo(e.target.value)}
            />
          </Col>
          <Col>
            <Button type="submit" variant="success">
              Add
            </Button>
          </Col>
        </Row>
      </Form>

      {Todo &&
        Todo.map((t, index) => (
          <ListGroup style={{ width: "50rem", marginTop: "10px" }}>
            <ListGroup.Item key={index}>
              {" "}
              {t}
              
              <Button
                variant="danger"
                style={{ marginLeft: "30px", width: "5rem", float: "right" }}
                onClick={()=> removeHandler(index)}
              >
                Delete
              </Button>

              {/* <Button
                variant="info"
                style={{ width: "5rem", float: "right" }}
                // onClick={()=> editHandler(index)}
              >
                Edit
              </Button> */}
            </ListGroup.Item>
          </ListGroup>
        ))}
    </div>
  );
}

export default Todo;
