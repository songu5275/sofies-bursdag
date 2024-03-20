import Image from "next/image";
import sofie from "../app/images/sofie.jpg";

export default function Home() {
  return (
    <div className="bg-pink-300 min-h-screen">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl m-20">Velkommen til Sofies 21 års dag!</h1>
        <div className="flex gap-10">
          <Image src={sofie} alt="Vercel Logo" width={72} height={16} />
          <Image src={sofie} alt="Vercel Logo" width={72} height={16} />
        </div>
        <div className="m-20">
          <p style={{ fontFamily: "Arial, sans-serif", fontWeight: "bold" }}>
            Tema: ____{" "}
          </p>
          <p
            style={{
              fontFamily: "Arial, sans-serif",
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          >
            Dato: ____
          </p>
          <p style={{ fontFamily: "Arial, sans-serif", fontWeight: "bold" }}>
            Tidspunkt: ____
          </p>
          <p style={{ fontFamily: "Arial, sans-serif", fontWeight: "bold" }}>
            Sted: ____
          </p>
        </div>
      </div>
    </div>
  );
}
