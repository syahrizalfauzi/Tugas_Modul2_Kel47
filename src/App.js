import React from "react";
import Checklist from "./Checklist";
import Button from "./Counter";

function App() {
  return (
    <div className="bg-gray-900 text-white h-screen p-4">
      <h1 className="font-extrabold text-3xl mb-4">
        Tugas Praktikum RPLBK Modul 2 Kelompok 47
      </h1>
      <p className="font-thin text-base">Anggota :</p>
      <ul>
        <li className="font-bold">Muhammad Syahrizal Fauzi (21120118130066)</li>
        <li className="font-bold">Muhammad Dzaky Naufal (21120118140071)</li>
      </ul>

      <div className="mt-4">
        <h1 className="text-lg font-bold mb-2">Komponen 1 : Checklist</h1>
        <Checklist
          items={[
            { title: "Belajar react", isChecked: false },
            { title: "Kerjain lembar analisis", isChecked: true },
            { title: "Makan", isChecked: false },
          ]}
          isBordered
          strikethrough
        />
      </div>
      <div className="mt-4">
        <h1 className="text-lg font-bold mb-2">Komponen 2 : Counter</h1>
        <Button
          bold={[{
            "name": "kursi",
            "ukuran": "besar"
          },
          {
            "name": "meja",
            "ukuran": "besar"
          }
        ]}
          italic underline />
      </div>
    </div>
  );
}

export default App;
