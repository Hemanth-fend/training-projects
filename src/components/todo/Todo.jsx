import { Button, Row, Col, ListGroup } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { AddTodoAction, EditTodoAction, RemoveTodoAction, updateTodo, updateTodoAction } from "../../redux/action-creators/TodoActions";

import TodoImage3 from './TodoImage3.webp'


function Todo() {
  const [todo, setTodo] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.ToDo.todos);
  const [updateId, setUpdateId] = useState(null)


  const handleSubmit = (e) => {
    e.preventDefault();
    !isEdit && dispatch(AddTodoAction(todo));
    isEdit && dispatch(updateTodoAction(updateId,todo)) && setIsEdit(false);
    setTodo('');
  };

  
  const removeHandler = (index)=>{
    dispatch(RemoveTodoAction(index))
  }
 
  const editHandler = (idx) => {
    setIsEdit(true);
    setUpdateId(idx);
    setTodo(Todo.find((value, id) => id === idx));
  };

  return (
    <div style={{ margin: "50px" }}>
      <h3>Todo App</h3>
      <Row>
        <Col  style={{width:"100%"}}>
        <img src={TodoImage3} alt="TodoImage" />
        </Col>
       <Col >
      <Form onSubmit={handleSubmit} id="todoForm">
        <Row>
          <Col>
            <Form.Control
              value={todo}
              type="text"
              id=""
              style={{ width: "40rem" }}
              onChange={(e) => setTodo(e.target.value)}
            />
          </Col>
          <Col>
            <Button type="submit" variant="success">
            {isEdit ? 'Save' : 'Add'}
            </Button>
          </Col>
        </Row>
      </Form>

      {Todo &&
        Todo.map((t, index) => (
          <ListGroup style={{ width: "50rem", marginTop: "10px" }}>
            <ListGroup.Item key={index}>
              {t}
              <Button
                variant="danger"
                style={{ marginLeft: "30px", width: "5rem", float: "right" }}
                onClick={()=> removeHandler(index)}
              >
                Delete
              </Button>

              <Button
                variant="info"
                style={{ width: "5rem", float: "right" }}
                onClick={()=> editHandler(index)}
              >
                Edit
              </Button>
            </ListGroup.Item>
          </ListGroup>
        ))}
        </Col>
        </Row>
    </div>
  );
}

export default Todo;
