import { makeStyles } from "@material-ui/core/styles";

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
  },
}));

const NavBar = () => {
  // hooks
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <h2 className={classes.logo}>conduit</h2>
      </div>
      <div>
        <a className={classes.links} href="/">
          Home
        </a>
        <a className={classes.links} href="/signin">
          Sign in
        </a>
        <a className={classes.links} href="/signup">
          Sign up
        </a>
      </div>
    </div>
  );
};

export default NavBar;
