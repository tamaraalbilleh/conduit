import { makeStyles } from "@material-ui/core/styles";
import cookie from "react-cookies";
import If from "./If";
import { signOut } from "../store/actions";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    alignContent: "center",
    padding: "0.1%",
    display: "flex",
    justifyContent: "space-around",
    boxShadow: "1px 7px 33px -7px rgba(0,0,0,0.75)",
    marginTop: "-10px",
    marginLeft: "-10px",
    zIndex: "1",
  },
  logo: { color: "#5cb85c" },
  links: {
    color: "#373a3c",
    textDecoration: "none",
    lineHeight: "65px",
    marginRight: "20px",
    border: "none",
    backgroundColor: "white",
  },
}));

const NavBar = () => {
  // hooks
  const classes = useStyles();
  const auth = cookie.load("auth");

  const handleLogOut = () => {
    signOut();
  };
  return (
    <div className={classes.root}>
      <div>
        <h2 className={classes.logo}>conduit</h2>
      </div>
      <div>
        <a className={classes.links} href="/">
          Home
        </a>
        <If condition={!auth}>
          <a className={classes.links} href="/signin">
            Sign in
          </a>
          <a className={classes.links} href="/signup">
            Sign up
          </a>
        </If>
        <If condition={auth}>
          <a className={classes.links} href="/settings">
            Settings
          </a>
          <button onClick={handleLogOut} className={classes.links} href="/">
            Logout
          </button>
        </If>
      </div>
    </div>
  );
};

export default NavBar;
