"use client";
import {kartu} from "../data/kartu";
import { useState } from "react";
import Image from "next/image";


export default function Home() {
  const [selected, setSelected] = useState<number | null>(null);

  // inisialisasi ada di page baru = kartu.ts

  
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="grid grid-cols-4 gap-10">
        {kartu.map((item, i) => (
          <div
            key={i}
            onClick={() => setSelected(i)}
            //   ${item.color}
            className={`w-32 h-32  bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-2xl cursor-pointer hover:opacity-80 transition`}
          >
            <div className="flex flex-col items-center">
              <Image
                src={item.image}
                alt={item.text}
                width={80}
                height={80}
                className="rounded-lg"
              />

              <p className="mt-2 text-center text-sm">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      {selected !== null && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96 relative">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-2 right-4 text-black text-2xl"
            >
              ×
            </button>

            <Image
              src={kartu[selected].image}
              alt={kartu[selected].text}
              width={190}
              height={0}
              className="rounded-lg mx-auto"
            />

            <h2 className="text-black text-xl text-center mt-4">
              {kartu[selected].text}
            </h2>

            <p className="text-black mt-4 text-center">
              {kartu[selected].info}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
