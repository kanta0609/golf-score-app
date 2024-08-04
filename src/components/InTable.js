import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  name,
  hole1,
  hole2,
  hole3,
  hole4,
  hole5,
  hole6,
  hole7,
  hole8,
  hole9
) {
  return {
    name,
    hole1,
    hole2,
    hole3,
    hole4,
    hole5,
    hole6,
    hole7,
    hole8,
    hole9,
  };
}

const rows = [
  createData("IN", 1, 2, 3, 4, 5, 6, 7, 8, 9),
  createData("PAR", 4, 5, 3, 4, 4, 4, 5, 3, 4),
  createData("Score", 4, 5, 3, 4, 4, 4, 5, 3, 4),
];

export default function InScoreTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="golf score table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.hole1}</TableCell>
              <TableCell align="right">{row.hole2}</TableCell>
              <TableCell align="right">{row.hole3}</TableCell>
              <TableCell align="right">{row.hole4}</TableCell>
              <TableCell align="right">{row.hole5}</TableCell>
              <TableCell align="right">{row.hole6}</TableCell>
              <TableCell align="right">{row.hole7}</TableCell>
              <TableCell align="right">{row.hole8}</TableCell>
              <TableCell align="right">{row.hole9}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
