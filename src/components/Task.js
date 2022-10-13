import React, { useState } from "react";

import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { red, green } from "@mui/material/colors";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/PublishedWithChanges";

export const Task = (props) => {
  const [showUpdateTask, setShowUpdateTask] = useState(false);

  const [updateTaskData, setUpdateTaskData] = useState("");

  const updateData = () => {
    if (updateTaskData.length !== 0) {
      props.updateTask(props.id, updateTaskData);
      setShowUpdateTask(!showUpdateTask);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      updateData();
    }
  };

  // "Not Started", "#FFCC99",
  // "Open", "#E6FF99",
  // "In Progress", "#99E6FF",
  // "Closed", "#B399FF"
  const color = (status) => {
    if (status === "Open") {
      return "#E6FF99";
    } else if (status === "InProgress") {
      return "#99E6FF";
    } else if (status === "Closed") {
      return "#B399FF";
    } else {
      return "#FFCC99";
    }
  };

  return (
    <>
      <Container
        sx={{
          backgroundColor: `${color(props.status)}`,
          textAlign: "center",
          mt: "30px",
          pb: "30px",
          borderRadius: "10px",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          sx={{
            color: "white",
            p:"25px",
            textShadow: "1px 1px 2px black, 0 0 25px, 0 0 5px black",
            fontSize: "40px",
          }}
        >
          {props.taskName}
        </Typography>
        <Stack direction="row" spacing={8}>
          <Avatar
            sx={{
              bgcolor: "#E6FF99",
              width: 100,
              height: 40,
              color: "black",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              fontWeight: "700",
            }}
            variant="rounded"
            onClick={() => props.workStatus(props.id, "Open")}
          >
            Open
          </Avatar>
          <Avatar
            sx={{
              bgcolor: "#99E6FF",
              width: 130,
              height: 40,
              color: "black",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              fontWeight: "700",
            }}
            variant="rounded"
            onClick={() => props.workStatus(props.id, "InProgress")}
          >
            InProgress
          </Avatar>
          <Avatar
            sx={{
              bgcolor: "#B399FF",
              width: 100,
              height: 40,
              color: "black",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              fontWeight: "700",
            }}
            variant="rounded"
            onClick={() => props.workStatus(props.id, "Closed")}
          >
            Closed
          </Avatar>
          <Avatar
            sx={{
              bgcolor: red[500],
              width: 100,
              height: 40,
              color: "white",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
            variant="rounded"
            onClick={() => props.deleteTask(props.id)}
          >
            <DeleteIcon />
          </Avatar>
          <Avatar
            sx={{
              bgcolor: green[500],
              width: 100,
              height: 40,
              color: "white",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
            variant="rounded"
            onClick={() => setShowUpdateTask(!showUpdateTask)}
          >
            <UpdateIcon />
          </Avatar>
          <Avatar
            sx={{
              bgcolor: "transparent",
              width: 300,
              height: 60,
              color: "white",
            }}
            variant="rounded"
          >
            {showUpdateTask && (
              <>
                <Box
                  component="form"
                  noValidate
                  variant="rounded"
                  sx={{
                    border: "solid red 1px",
                    borderRadius: "10px",
                    width: 300,
                    p: "5px 2px",
                  }}
                >
                  <TextField
                    id="standard-basic"
                    sx={{
                      width: 250,
                      color: "green",
                      fontSize: "20px",
                    }}
                    label="After type hit enter to update"
                    variant="standard"
                    onChange={(event) => {
                      setUpdateTaskData(event.target.value);
                    }}
                    onKeyDown={handleKeyDown}
                  />
                </Box>
              </>
            )}
          </Avatar>
        </Stack>
      </Container>
    </>
  );
};
