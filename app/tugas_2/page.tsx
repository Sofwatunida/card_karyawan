// evolusi = hanya satu kotak yag dapat terbuka dan data tidak ikut tereset saat di refresh 



"use client";
import { useState } from "react";

// Data atau array setiap kotak
const kotak = [
  { color: "bg-amber-700", text: "idzhar" },
  { color: "bg-blue-500", text: "idghom" },
  { color: "bg-green-500", text: "ikhfa" },
  { color: "bg-yellow-500", text: "gunnah" },
  { color: "bg-purple-500", text: "mad wajib" },
  { color: "bg-stone-500", text: "iqlab" },
  { color: "bg-orange-500", text: "tanwin" },
  { color: "bg-cyan-500", text: "nun mati" }
];

export default function Home() {
  // Agar tidk ke refresh
  const [AktifIndex, setAktifIndex] = useState<number | null>(() => {
    const saved = localStorage.getItem("AktifIndex");
    
    return saved !== null ? Number(saved) : null;
    
});
    
  // keulang kalo refresh
  const handleClick = (index: number) => {
    setAktifIndex(index);
    localStorage.setItem("AktifIndex", index.toString());
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="grid grid-cols-4 gap-9">
        {kotak.map((kotak, i) => (
          <div
            key={i}
            onClick={() => handleClick(i)}
            className={`w-32 h-32 ${kotak.color} rounded-lg flex items-center justify-center text-white font-bold text-2xl cursor-pointer hover:opacity-80 transition`}
          >
            {i === AktifIndex ? kotak.text : ""}
            {/* kotak=nama, . text = isinya */}
          </div>
        ))}
      </div>
    </main>
  );
}
