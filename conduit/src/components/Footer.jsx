import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import GitHubIcon from "@material-ui/icons/GitHub";
const useStyles = makeStyles({
  root: {
    textAlign: "center",
    borderTop: "rgba(0,0,0,0.50) 1px solid",
    padding: "20px",
    backgroundColor: "#485563",
    width: "100%",
    marginLeft: "-10px",
    marginTop: "auto",
  },
  text: {
    color: "white",
    display: "inline-flex",
    textAlign: "center",
    marginLeft: "-20%",
  },
  p: {
    marginLeft: "10PX",
    lineHeight : '1px'
  },
});

const Footer = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <div style={{ marginTop: "100px" }}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className={classes.root}
      >
        <BottomNavigationAction href="https://github.com/tamaraalbilleh/conduit" />
        <div className={classes.text}>
          <GitHubIcon />
          <p className={classes.p}>Fork On GitHuub</p>
        </div>
      </BottomNavigation>
    </div>
  );
};

export default Footer;
