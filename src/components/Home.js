import React, { useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/action";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  tableContainer: {
    marginLeft: "12rem",
    marginTop: "5rem",
  },
  table: {
    minWidth: 700,
    maxWidth: 900,
  },
});

const Home = () => {
  let dispatch = useDispatch();
  const { users } = useSelector((state) => state.userData);
  const classes = useStyles();
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleDelete = ( )=> {
    
  }
  
  return (
    <TableContainer className={classes.tableContainer}>
      <Button
        onClick={() => navigate("/addUser")}
        color="primary"
        variant="contained"
        style={{ marginBottom: "2rem" }}
      >
        Add User
      </Button>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Mobile</StyledTableCell>
            <StyledTableCell align="center">Chanel</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users &&
            users.map((user) => (
              <StyledTableRow key={user.id}>
                <StyledTableCell component="th" scope="row">
                  {user.id}
                </StyledTableCell>
                <StyledTableCell align="center">{user.name}</StyledTableCell>
                <StyledTableCell align="center">{user.email}</StyledTableCell>
                <StyledTableCell align="center">{user.mobile}</StyledTableCell>
                <StyledTableCell align="center">{user.chanel}</StyledTableCell>
                <StyledTableCell align="center">
                  <Button color="primary" variant="outlined">
                    Edit
                  </Button>
                  <Button
                    color="secondary"
                    variant="outlined"
                    style={{ marginLeft: "0.5rem" }}
                    onClick={()=> handleDelete}
                  >
                    Delete
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Home;
