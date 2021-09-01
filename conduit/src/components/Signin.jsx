import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { connect } from "react-redux";
import { signin } from "../store/actions";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    textAlign: "center",
    padding: "2%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "60vh",
  },
  a: {
    color: "#5cb85c",
    marginBottom: "26px",
  },
  form: {
    marginTop: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: "50%",
  },
  inputs: {
    width: "90%",
    padding: "14px",
  },
  button: {
    backgroundColor: "#5cb85c",
    padding: "12px",
    color: "white",
    width: "30%",
    border: "none",
    alignSelf: "flex-end",
    marginRight: "2%",
  },
}));

const Signin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      user: {
        email,
        password,
      },
    };
    props.signin(user);
  };
  const handleChange = ({ currentTarget }) => {
    currentTarget.name === "email"
      ? setEmail(currentTarget.value)
      : setPassword(currentTarget.value);
  };

  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <h2>Sign In</h2>
        <a href="/signup" className={classes.a}>
          Need an account?
        </a>

        <form onSubmit={handleSubmit} className={classes.form}>
          <div className="form-group">
            <input
              onChange={handleChange}
              className={classes.inputs}
              placeholder="Email"
              type="email"
              id="Email"
              name="email"
              value={email}
            />
          </div>
          <div className="form-group">
            <input
              onChange={handleChange}
              className={classes.inputs}
              placeholder="Password"
              type="password"
              id="password"
              name="password"
              value={password}
            />
          </div>
          <button type="submit" className={classes.button}>
            Sign in
          </button>
        </form>
      </div>
    </>
  );
};

const mapDispatchToProps = { signin };
const mapStateToProps = (state) => state;
export default connect(mapStateToProps, mapDispatchToProps)(Signin);


// bio: null
// createdAt: "2021-08-31T13:34:49.182Z"
// email: "tamara2alndbhs@gadmd.com"
// id: 217332
// image: null
// token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjE3MzMyLCJ1c2VybmFtZSI6InRhbWFyYTEwMiIsImV4cCI6MTYzNTYwOTM4Mn0.lYlxqerOmnDNbX3uWM15O6J6bXZA7puGozDk51uINV8"
// updatedAt: "2021-08-31T13:34:49.285Z"
// username: "tamara102"