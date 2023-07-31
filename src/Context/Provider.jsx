import React, { useState } from "react";
import AppContext from "./AppContext";

export default function Provider({ children }) {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [imc, setImc] = useState(0);
  const [resultado, setResultado] = useState("");
  // const [tabela, setTabela] = useState(false);

  const value = {
    height,
    setHeight,
    weight,
    setWeight,
    imc,
    setImc,
    resultado,
    setResultado,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
