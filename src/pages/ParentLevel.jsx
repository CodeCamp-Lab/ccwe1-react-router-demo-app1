import { useState } from "react";
import Level1 from "../components/level/Level1";

export default function ParentLevel() {
  const [score, setScore] = useState(0);

  return (
    <div>
      <h2>Level Page</h2>
      <p>score: {score}</p>
      <Level1 score={score} setScore={setScore}/>
    </div>
  );
}
