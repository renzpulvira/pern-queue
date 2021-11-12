import React, { useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  ButtonGroup,
} from "@mui/material";

function createData(title, queuedBy) {
  return { title, queuedBy };
}

const rows = [
  createData("The Event Loop | Javascript", "CodeEngine"),
  createData("Javascript tutorial #1", "The Dev"),
  createData("Figma Beginner tutorial", "Dev ed"),
  createData("The Event Loop | Javascript", "CodeEngine"),
  createData("Javascript tutorial #1", "The Dev"),
  createData("Figma Beginner tutorial", "Dev ed"),

  createData("The Event Loop | Javascript", "CodeEngine"),
  createData("Javascript tutorial #1", "The Dev"),
  createData("Figma Beginner tutorial", "Dev ed"),
  createData("The Event Loop | Javascript", "CodeEngine"),
  createData("Javascript tutorial #1", "The Dev"),
  createData("Figma Beginner tutorial", "Dev ed"),

  createData("The Event Loop | Javascript", "CodeEngine"),
  createData("Javascript tutorial #1", "The Dev"),
  createData("Figma Beginner tutorial", "Dev ed"),
  createData("The Event Loop | Javascript", "CodeEngine"),
  createData("Javascript tutorial #1", "The Dev"),
  createData("Figma Beginner tutorial", "Dev ed"),

  createData("The Event Loop | Javascript", "CodeEngine"),
  createData("Javascript tutorial #1", "The Dev"),
  createData("Figma Beginner tutorial", "Dev ed"),
  createData("The Event Loop | Javascript", "CodeEngine"),
  createData("Javascript tutorial #1", "The Dev"),
  createData("Figma Beginner tutorial", "Dev ed"),
];

const QueueItem = ({ row, ind }) => {
  return (
    <TableRow
      key={ind}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell align="left">{ind < 9 ? "0" + (ind + 1) : ind + 1}</TableCell>
      <TableCell align="left">{row.title}</TableCell>
      <TableCell align="left">{row.queuedBy}</TableCell>
      <TableCell align="right">
        <ButtonGroup>
          <Button variant="outlined">Next</Button>
          <Button variant="outlined">Delete</Button>
        </ButtonGroup>
      </TableCell>
    </TableRow>
  );
};

export default function Queues() {
  const [items, SetItems] = useState(rows);

  return (
    <TableContainer component={Paper} sx={{ width: "100%", maxHeight: 600 }}>
      <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">#</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">Queued By</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((row, ind) => (
            <QueueItem key={ind} row={row} ind={ind} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
