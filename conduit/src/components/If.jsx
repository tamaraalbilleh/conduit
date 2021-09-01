import PropTypes from "prop-types";

const If = (props) => {
  if (props.condition) {
    return props.children;
  } else {
    return null;
  }
};
export default If;

If.propTypes = {
  condition: PropTypes.bool,
};
