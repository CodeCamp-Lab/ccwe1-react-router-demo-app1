import { useCounterStore } from "../../store/counterStore"

export default function Level3({score, setScore}) {

    const increment = useCounterStore((state) => state.increment);

    return <div className="p-3">
        <h3 className="font-bold">Level3</h3>
        <p>score: {score}</p>
        <br/>
        <button onClick={()=> setScore(score + 1)} className="border-2 p-2 cursor-pointer">เพิ่มคะแนน</button>
        <br/><br/><br/>
         <button onClick={increment} className="border-2 p-2 cursor-pointer">เพิ่ม counter</button>
    </div>
}