import Level2 from "./Level2";

export default function Level1({ score, setScore }) {
  return (
    <div className="p-3">
      <h3 className="font-bold">Level1</h3>
      <p>score: {score}</p>
      <Level2 score={score} setScore={setScore} />
    </div>
  );
}
