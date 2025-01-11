import { Preguntas } from "./components/Preguntas";
import {Card} from "./components/Card";
import logo from "./assets/Logo.png";


export default function Home() {
  return (
    <main className="text-[20] bg-[#1b1b1d]">
      <div className="flex flex-col items-center px-[15%]">
        <Preguntas/>
        {/* <img src={logo}/> */}
        <button className="text-yellow-50 w-48 bg-slate-500"> Next </button>
        <div className='flex flex-wrap'>

        <Card/>
        <Card/>
        <Card/>
        </div>
      </div>
    </main>
  );
}
