import Level3 from "./Level3"

export default function Level2({score, setScore}) {
    return <div className="p-3">
        <h3 className="font-bold">Level2</h3>
        <p>score: {score}</p>
        <Level3 score={score} setScore={setScore}/>
    </div>
}