import Image from "next/image";
import sofie from "../app/images/sofie.jpg";

export default function Home() {
  return (
    <div className="bg-pink-300 min-h-screen">
      <div className="flex flex-col justify-center items-center">
        <div className="m-20 text-white">
          <h1 className="text-4xl m-20">VELKOMMEN TIL SOFIES 21-ÅRS DAG!</h1>
          <div className="flex gap-10">
            <Image src={sofie} alt="Vercel Logo" width={72} height={16} />
            <Image src={sofie} alt="Vercel Logo" width={72} height={16} />
          </div>
        </div>
        <div className="m-20 text-white">
          <p className="font-bold text-1.5xl text-white">TEMA: ____</p>
          <p className="font-bold text-1.5xl text-white">DATO: ____</p>
          <p className="font-bold text-1.5xl text-white">TIDSPUNKT: ____</p>
          <p className="font-bold text-1.5xl text-white">STED: ____</p>
        </div>
      </div>
    </div>
  );
}
