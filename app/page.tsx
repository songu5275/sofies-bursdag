"use client";
import { useState, useEffect } from 'react';
import Image from "next/image";
import sofie from "../app/images/sofie.jpg";
import prinsesse from "../app/images/prinsesse.png"
import Confetti from 'react-confetti';

export default function Home() {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 10000); 
  }, []);

  return (
    <div className="bg-pink-300 min-h-screen">
      {showConfetti && <Confetti />}
      <div className="flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl mb-10">VELKOMMEN TIL SOFIES 21-ÅRS DAG!</h1>
          <div className="flex flex-col sm:flex-row gap-10 mt-10"> 
            <Image src={sofie} alt="Sofie" width={300} height={300} />
            <Image src={prinsesse} alt="Sofie" width={300} height={300} />
        </div>
        <div className="m-20 text-white">
          <p className="font-bold text-1.5xl text-white">TEMA: TBA</p>
          <p className="font-bold text-1.5xl text-white">DATO: ____</p>
          <p className="font-bold text-1.5xl text-white">TIDSPUNKT: ____</p>
          <p className="font-bold text-1.5xl text-white">STED: ____</p>
        </div>
      </div>
    </div>
  );
}
