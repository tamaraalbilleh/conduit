import PropTypes from "prop-types";

import { connect } from "react-redux";
import { getTags } from "../store/actions";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { returnState } from "../store/returnState";

import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  tags: { margin: "5px" },
}));

const Tags = (props) => {
  const classes = useStyles();
  const url = "https://conduit.productionready.io/api/tags";

  useEffect(() => {
    props.getTags(url);
  }, []);

  const state = useSelector(() => returnState(props));

  const tags = state.tags.tags;
  return (
    <div className={classes.tags}>
      <h3>Popular Tags</h3>
      {tags.length === 0 && <p>Loading Tags...</p>}
      {tags.length > 0 && (
        <div>
          {tags.map((tag) => {
            return (
              <Chip
                className={classes.tags}
                label={tag}
                component="a"
                href="#chip"
                clickable
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = { getTags };
const mapStateToProps = (state) => state;
export default connect(mapStateToProps, mapDispatchToProps)(Tags);

Tags.propTypes = {
  articles: { articles: PropTypes.array },
  getTags: PropTypes.func,
  tags: { tags: PropTypes.array },
};
// like
// Request URL: https://conduit.productionready.io/api/articles/66-76zbil/favorite

// comments
// Request URL: https://conduit.productionready.io/api/articles/66-76zbil/comments

// profile
// Request URL: https://conduit.productionready.io/api/profiles/mahshid
