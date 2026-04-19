import { useState } from "react";
import Level1 from "../components/level/Level1";
import { useCounterStore } from "../store/counterStore";

export default function ParentLevel() {
  const [score, setScore] = useState(0);

  const count = useCounterStore((state) => state.count)
  const min = useCounterStore((state) => state.min);
  const max = useCounterStore((state) => state.max);

  return (
    <div>
      <h2>Level Page</h2>
      <p>score: {score}</p>
      <Level1 score={score} setScore={setScore}/>
      <hr />
      <div className="p-8 text-3xl">counter: {count}</div>
      <p>ค่าต่ำสุด: {min}</p>
      <p>ค่ามากสุด: {max}</p>
    </div>
  );
}
