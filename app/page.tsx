import Image from "next/image";
import sofie from "../app/images/sofie.jpg";

export default function Home() {
  return (
    <div className="bg-pink-300 min-h-screen">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl m-20">VELKOMMEN TIL SOFIES 21ÅRS DAG!</h1>
        <div className="flex gap-10">
          <Image src={sofie} alt="Vercel Logo" width={72} height={16} />
          <Image src={sofie} alt="Vercel Logo" width={72} height={16} />
        </div>
        <div className="m-20">
          <p style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '1.5rem', color: 'white' }}>TEMA: ____ </p>
          <p style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '1.5rem', color: 'white' }}>DATO: ____</p>
          <p style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '1.5rem', color: 'white' }}>TIDSPUNKT: ____</p>
          <p style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '1.5rem', color: 'white' }}>STED: ____</p>
        </div>
      </div>
    </div>
  );
}
