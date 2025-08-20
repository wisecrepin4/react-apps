import PropTypes from "prop-types";
export default function ConditionalRender({
  username = "Guest",
  isLoggedIn = true,
}) {
  let msg = <h2>Welcome {username}</h2>;
  let loginmsg = <h2>User please first login</h2>;
  return isLoggedIn ? msg : loginmsg;
}
ConditionalRender.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};

// ConditionalRender.defaultProps = {
//   isLoggedIn: false,
//   username: "Guest",
// };
