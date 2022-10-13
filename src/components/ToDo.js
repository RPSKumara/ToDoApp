import React, { useState } from "react";
import { Task } from "./Task";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import { green } from "@mui/material/colors";
import Container from "@mui/material/Container";

function ToDo() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleTask = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      status: "",
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const workStatus = (id, my_status) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, status: my_status };
        } else {
          return task;
        }
      })
    );
  };

  const updateTask = (id, data) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, taskName: data };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div>
      <Container maxWidth="sm">
        <Box
          sx={{
            mt: "30px",
            bgcolor: "#cfe8fc",
            height: "40vh",
            borderRadius: "10px",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          <Box
            sx={{
              "& > :not(style)": { m: "30px 10%", width: "80%" },
            }}
            noValidate
          >
            <TextField
              id="outlined-basic"
              label="Add Task"
              variant="outlined"
              onChange={handleTask}
            />
          </Box>
          <Avatar
            sx={{
              bgcolor: green[500],
              m: "0px 10%",
              width: "80%",
              height: 40,
              color: "white",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
            variant="rounded"
            onClick={addTask}
          >
            Add task
          </Avatar>
        </Box>
      </Container>
      <div className="addTask"></div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <Task
              taskName={task.taskName}
              status={task.status}
              id={task.id}
              deleteTask={deleteTask}
              workStatus={workStatus}
              updateTask={updateTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ToDo;
