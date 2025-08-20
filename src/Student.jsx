import PropTypes from "prop-types";
export default function Student(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Is student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}
Student.PropTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};
Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false,
};
