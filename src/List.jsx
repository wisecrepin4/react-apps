export default function List(props) {
  const listitems = props.items;
  listitems.sort((a, b) => b.name.localeCompare(a.name));
  const itemslist = listitems.map((item) => {
    return (
      <li key={item.id}>
        {item.name}:&nbsp;<b>{item.age}</b>
      </li>
    );
  });

  return (
    <>
      <h2>{props.category}</h2>
      <ol>
        {itemslist.length > 0} &&{itemslist}
      </ol>
    </>
  );
}
// List.propType = {
//   category: ProtTypes.string,
//   items: ProtoTypes.arrayOf(
//     ProtoTypes.Shape({
//       id: PropTypes.number,
//       name: PropTypes.string,
//       age: propTypes.number,
//     })
//   ),
// };
