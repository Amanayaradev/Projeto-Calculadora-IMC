import React, { useContext } from "react";
import AppContext from "../Context/AppContext";

export default function Tabela() {
  const { imc } = useContext(AppContext);
  return (
    <div>
      {!imc && (
        <table className="table-auto mt-9">
          <thead>
            <tr className="bg-table-green text-sm md:p-7 md:text-lg">
              <th className="p-3">RESULTADO |</th>
              <th>IMC |</th>
              <th>PESO</th>
            </tr>
          </thead>
          <tbody className=" flex-auto text-center">
            <tr className="text-sm md:p-7 md:text-lg">
              <td className="p-4">Magreza</td>
              <td className="p-4">&lt; 18.5</td>
              <td className="p-4">&lt; 50.4 Kg</td>
            </tr>
            <tr className="text-sm md:p-7 md:text-lg">
              <td className="p-4">Normal</td>
              <td className="p-4">18.5 a 24.9</td>
              <td className="p-4">50.4 a 67.8 Kg</td>
            </tr>
            <tr className="text-sm md:p-7 md:text-lg">
              <td className="p-4">Sobrepeso</td>
              <td className="p-4">24.9 a 30</td>
              <td className="p-4">67.8 a 81.7 Kg</td>
            </tr>
            <tr className="text-sm md:p-7 md:text-lg">
              <td className="p-4">Obesidade</td>
              <td className="p-4">&gt; 30</td>
              <td className="p-4">&gt; 81.7 Kg</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}
