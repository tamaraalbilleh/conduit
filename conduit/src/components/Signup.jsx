import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { returnState } from "../store/returnState";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { signup } from "../store/actions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
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
  a: { color: "#5cb85c", marginBottom: "26px" },
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
const Signup = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setusernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const classes = useStyles();
  const state = useSelector(() => returnState(props));
  const history = useHistory();

  // handlers
  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      user: {
        username,
        email,
        password,
      },
    };
    const valid = validate(user);
    if (valid) props.signup(user);
  };

  const handleChange = ({ currentTarget: input }) => {
    input.name === "username"
      ? setUsername(input.value)
      : input.name === "email"
      ? setEmail(input.value)
      : setPassword(input.value);
  };

  // helper functions
  const validate = ({ user: item }) => {
    if (item.username.length >= 1) {
      if (item.password.length >= 8) {
        return true;
      } else {
        setPasswordError("password is too short (minimum is 8 characters)");
        return false;
      }
    } else if (item.username.length > 20 || item.username.length < 1) {
      setusernameError(
        `username can't be too short (minimum is 1 character) or too long (maximum is 20 characters)`
      );
      return false;
    }
  };
  console.log("state");
  return (
    <div className={classes.root}>
      <h2>Sign Up</h2>
      <a href="/signin" className={classes.a}>
        Have an account?
      </a>
      <ul>
        {emailError && <li>{emailError}</li>}
        {passwordError && <li>{passwordError}</li>}
        {usernameError && <li>{usernameError}</li>}
        {state.user.user.registrationErrors &&
          state.user.user.registrationErrors.map((item) => <li>{item}</li>)}
      </ul>
      <form onSubmit={handleSubmit} className={classes.form}>
        <div className="form-group">
          <input
            autoFocus
            value={username}
            onChange={handleChange}
            className={classes.inputs}
            placeholder="Username"
            type="text"
            id="username"
            name="username"
          />
        </div>

        <div className="form-group">
          <input
            onChange={handleChange}
            className={classes.inputs}
            placeholder="Email"
            type="email"
            id="Email"
            name="email"
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
          />
        </div>
        <button
          onClick={state.user.user.info.token ? history.push("/") : ""}
          type="submit"
          className={classes.button}
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = { signup };
const mapStateToProps = (state) => state;
export default connect(mapStateToProps, mapDispatchToProps)(Signup);


Signup.propTypes = {
  articles: { articles: PropTypes.array },
  signup: PropTypes.func,
  tags: { tags: PropTypes.array },
  user: {
    info: PropTypes.object,
    loginErrors: PropTypes.array,
    registrationError: PropTypes.array,
  },
};

