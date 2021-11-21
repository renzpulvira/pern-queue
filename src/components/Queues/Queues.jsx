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
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { Delete } from "@mui/icons-material";
function createData(title, queuedBy) {
  return { title, queuedBy };
}

const rows = [
  createData("I Built a $40 Budget Custom Mechanical Keyboard", "Lewis Toh"),
  createData("how we write/review code in big tech companies", "Joma Tech"),
  createData("Hate Windows 11? Try this", "Linus Tech Tips"),
  createData("lilypichu slaps aria's A$$", "Saitama Boi"),
  createData(
    "31 Tiny Minecraft Tweaks for BIG Improvement",
    "Skip the Tutorial"
  ),
  createData("YOU LAUGH YOU METH", "StreetCan"),
  createData("Pythong Django 7 Hour Course", "Traversy Media"),
  createData("Heroes That Solo Carry Your Games", "GamerzClass Dota2"),
];

const QueueItem = ({ row, ind, handleNextItem, handleDeleteItem }) => {
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
          <Button
            variant="outlined"
            startIcon={<ControlPointIcon />}
            onClick={() => handleNextItem(ind)}
          >
            Next
          </Button>
          <Button
            variant="outlined"
            startIcon={<Delete />}
            onClick={() => handleDeleteItem(ind)}
          >
            Delete
          </Button>
        </ButtonGroup>
      </TableCell>
    </TableRow>
  );
};

export default function Queues() {
  const [items, setItems] = useState(rows);

  const queueNextItem = (index) => {
    let copyItems = [...items];

    let willMove = copyItems[index];
    copyItems.splice(index, 1);
    copyItems.unshift(willMove);
    setItems(copyItems);
  };

  const removeQueuedItem = (index) => {
    let copyItems = [...items];
    copyItems.splice(index, 1);
    setItems(copyItems);
  };

  return (
    <TableContainer component={Paper} sx={{ width: "100%", maxHeight: 800 }}>
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
            <QueueItem
              key={ind}
              row={row}
              ind={ind}
              handleNextItem={queueNextItem}
              handleDeleteItem={removeQueuedItem}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
