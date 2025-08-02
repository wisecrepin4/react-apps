import profilepic from "./assets/md.jpg";
export default function Card() {
  return (
    <div className="card">
      <img src={profilepic} alt="card image" className="card-image" />
      <p className="card-title">Wise Crepin</p>
      <p className="card-description">
        I solve the world's problems using tech
      </p>
    </div>
  );
}
