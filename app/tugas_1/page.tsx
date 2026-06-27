// membuat 8 kotak bilamana di klik maka akan keluar text dan jika di klik lagi menghilang


"use client";
import { useState } from "react";

// Data setiap kotak
const cards = [
  { color: "bg-amber-700", text: "idzhar" },
  { color: "bg-blue-500", text: "idghom" },
  { color: "bg-green-500", text: "ikhfa" },
  { color: "bg-yellow-500", text: "gunnah" },
  { color: "bg-purple-500", text: "mad wajib" },
  { color: "bg-stone-500", text: "iqlab" },
  { color: "bg-orange-500", text: "tanwin" },
  { color: "bg-cyan-500", text: "nun mati" },
  { color: "bg-red-500", text: "" },
];

export default function Home() {
  // Menyimpan status tampil/sembunyi setiap kotak
  const [showText, setShowText] = useState(Array(cards.length).fill(false));

  // Mengubah status kotak saat diklik
  const handleClick = (index: number) => {
    const newShowText = [...showText];
    newShowText[index] = !newShowText[index];
    setShowText(newShowText);
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="grid grid-cols-3 gap-9">
        {cards.map((card, i) => (
          <div
            key={i}
            onClick={() => handleClick(i)}
            className={`w-32 h-32 ${card.color} rounded-lg flex items-center justify-center text-white font-bold text-2xl cursor-pointer hover:opacity-80 transition`}
          >
            {showText[i] ? card.text : ""}
          </div>
        ))}
      </div>
    </main>
  );
}
