import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { returnState } from "../store/returnState";
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
  const state = useSelector(() => returnState(props));
  const classes = useStyles();

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


  console.log (props , 'props')
  return (
    <>
      <div className={classes.root}>
        <h2>Sign In</h2>
        <a href="/signup" className={classes.a}>
          Need an account?
        </a>
        <ul>
          {state.user.user.loginErrors &&
            state.user.user.loginErrors.map((item) => <li>{item}</li>)}
        </ul>
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

Signin.propTypes = {
  articles: { articles: PropTypes.array },
  signin: PropTypes.func,
  tags: { tags: PropTypes.array },
};
