"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import sovepose from "../app/images/sovepose.png";
import prinsesse from "../app/images/prinsesse.png";
import Confetti from "react-confetti";
import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";

export default function Home() {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 10000);
  }, []);

  return (
    <div className="bg-purple-300 min-h-screen  mx-auto">
      {showConfetti && <Confetti />}
      <div className="flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl mt-10 font-extrabold">🥂 VELKOMMEN 🥂</h1>
        <h3 className="text-2xl m-5 font-semibold">Du er herved invitert til min 21 års-dag 💜</h3>
        <div className="border border-white p-5 text-white">
          <p>
            <span className="font-bold">DATO: </span>12. april
          </p>
          <p>
            <span className="font-bold">TIDSPUNKT: </span> 19:00
          </p>
          <Link
            className="flex"
            href="https://maps.app.goo.gl/4yAepJF67JMoAJaM7"
            target="_blank"
          >
            <span className="font-bold mr-1">STED: </span>{" "}
            <span className="underline flex">
              {" "}
              Programmerbar
              <SquareArrowOutUpRight className="size-4 my-auto mx-1" />
            </span >{" "}
          </Link>
         
        </div>
        <p className="my-3 font-semibold">Gled deg! dette blir moro. Weheyy 🥳</p>
        <div className="flex flex-col sm:flex-row gap-10 my-10 ">
          {/* <div className="polaroid">
            <Image src={sovepose} alt="Sofie" width={300} height={300} />
          </div> */}
          <div className="polaroid text-black">
            <h3 className="text-xl font-bold text-center">TEMA:</h3>
            <p className="text-center">Kle deg ut som noe på forbokstaven din 💅</p>
            <Image src={prinsesse} alt="Sofie" width={400} height={400} priority/>
          </div>
        </div>
      </div>
    </div>
  );
}
