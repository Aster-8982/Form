import { Button, makeStyles, TextField, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sendUser } from "../redux/action";

const useStyles = makeStyles({
  container: {
    marginTop: "1rem",
  },
});

const AddUser = () => {
  const classes = useStyles();
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const [state, setState] = useState({
    name: "",
    email: "",
    mobile: "",
    chanel: "",
  });
  const { name, email, mobile, chanel } = state;
  const [error, setError] = useState("");

  useEffect(() => {}, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !mobile || !chanel) {
      setError("Need to filled all Input");
    } else {
      dispatch(sendUser(state));
      navigate("/");
      setError("");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  
  return (
    <div className={classes.container}>
      <Typography variant="h4" style={{ marginBottom: "1rem" }}>
        ADD USER
      </Typography>
      <Button
        color="primary"
        style={{ marginBottom: "1rem" }}
        variant="contained"
        onClick={() => navigate("/")}
      >
        User List
      </Button>
      <Typography variant="h5" style={{ marginBottom: "1rem" }}>
        {error}
      </Typography>
      <form className={classes.Form} autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          type="text"
          variant="outlined"
          label="Name"
          name="name"
          value={name}
          onChange={handleChange}
          style={{ marginBottom: "0.5rem" }}
        />
        <br />
        <TextField
          type="text"
          variant="outlined"
          label="Email"
          name="email"
          value={email}
          onChange={handleChange}
          style={{ marginBottom: "0.5rem" }}
        />
        <br />
        <TextField
          type="number"
          variant="outlined"
          label="Mobile"
          name="mobile"
          value={mobile}
          onChange={handleChange}
          style={{ marginBottom: "0.5rem" }}
        />
        <br />
        <TextField
          type="text"
          variant="outlined"
          label="Chanel"
          name="chanel"
          value={chanel}
          onChange={handleChange}
          style={{ marginBottom: "0.5rem" }}
        />
        <br />
        <Button color="primary" variant="contained" type="submit">
          ADD USER
        </Button>
      </form>
    </div>
  );
};

export default AddUser;
