import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  heading: { textAlign: "center", fontSize: "50px", color: "white" },
  quote: { textAlign: "center", fontSize: "30px", color: "white" },
  container: {
    width: "100%",
    backgroundColor: "#5cb85c",
    padding: "20px",
    marginLeft: "-10px",
    
  },
}));
const Hero = () => {
  //hooks
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>conduit</h1>
      <p className={classes.quote}>A place to share your knowledge.</p>
    </div>
  );
};

export default Hero;
