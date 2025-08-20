export default function Profile() {
  let imageUrl = "/md.jpg";
  const handleClick = (e) => {
    e.target.style.display = "none";
  };

  return (
    <>
      <img
        onClick={handleClick}
        src={imageUrl}
        alt="profile Image"
        style={{ width: "200px", height: "auto" }}
      />
    </>
  );
}
