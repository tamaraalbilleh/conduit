import React from "react";
import { connect, useDispatch } from "react-redux";
import { getArticles, postLike, liked } from "../store/actions";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { returnState } from "../store/returnState";
import Loader from "./Loader";
import Tags from "./Tags";
import If from "./If";
// material ui imports
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const useStyles = makeStyles((theme) => ({
  loaderDiv: { display: "inline-flex" },
  loaderP: { fontSize: "20px", lineHeight: "35px", fontWeight: "bold" },
  root: {
    width: "90%",
    marginBottom: "25px",
    marginLeft: "25px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "60% 40%",
    gap: "0px",
  },
  // tags : {'float' : 'right'}
}));

const Feed = (props) => {
  //hooks
  const dispach = useDispatch();
  const classes = useStyles();
  const state = useSelector(() => returnState(props));
  useEffect(() => {
    props.getArticles(url);
  }, []);

  // variables
  const articles = state.articles.articles;
  const url =
    "https://conduit.productionready.io/api/articles?limit=10&offset=0";

  // handlers
  const handleLike = (item) => {
    dispach(liked(item));
    props.postLike(item);
  };

  return (
    <>
      <h2 className={classes.root}>Global Feed </h2>
      <div className={classes.container}>
        <If condition={articles.length === 0}>
          <div className={classes.loaderDiv}>
            <p className={classes.loaderP}>Loading</p>
            <Loader />
          </div>
        </If>
        <If condition={articles.length > 0}>
          <div >
            {articles.map((item) => {
              return (
                <div key={item.slug}>
                  <Card className={classes.root}>
                    <CardHeader
                      avatar={
                        <img
                          className={classes.avatar}
                          src={item.author.image}
                          alt="Paella dish"
                        />
                      }
                      action={
                        <IconButton
                          aria-label="settings"
                          classes={classes.heart}
                          onClick={() => handleLike(item)}
                        >
                          {item.favorited ? (
                            <FavoriteIcon />
                          ) : (
                            <FavoriteBorderIcon />
                          )}

                          <p>{item.favoritesCount}</p>
                        </IconButton>
                      }
                      title={item.author.username}
                      subheader={moment(item.createdAt).format("YYYY-MM-DD")}
                    ></CardHeader>

                    <CardContent>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="div"
                      >
                        <h2>{item.title}</h2>
                        {item.description}
                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing></CardActions>
                  </Card>
                </div>
              );
            })}
          </div>
        </If>
        <div className={classes.tags}>
          <Tags />
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = { getArticles, postLike };
const mapStateToProps = (state) => state;
export default connect(mapStateToProps, mapDispatchToProps)(Feed);

//author:
// bio: null
// following: false
// image: "https://static.productionready.io/images/smiley-cyrus.jpg"
// username: "mahshid"
// [[Prototype]]: Object
// body: "66"
// createdAt: "2021-08-30T15:45:03.690Z"
// description: "66"
// favorited: false
// favoritesCount: 0
// slug: "66-76zbil"
// tagList: []
// title: "66"
// updatedAt: "2021-08-30T15:45:03.690Z"
// [[Prototype]]: Object

// Request URL: https://conduit.productionready.io/api/articles/66-76zbil/favorite
