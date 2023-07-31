import { format } from "date-fns";
import React, { useContext, useEffect } from "react";
import AppContext from "../Context/AppContext";
import salvarNoLocalStorage from "../LocalStorage/LocalStorage";

export default function Calculadora() {
  const { height, setHeight } = useContext(AppContext);
  const { weight, setWeight } = useContext(AppContext);
  const { imc, setImc } = useContext(AppContext);
  const { resultado, setResultado } = useContext(AppContext);
  const storedWeights = JSON.parse(localStorage.getItem("peso")) || [];

  const handleChangeHeight = ({ target }) => {
    setHeight(target.value);
  };
  const handleChangeWeight = ({ target }) => {
    setWeight(target.value);
  };

  useEffect(() => {
    const magreza = 18.5;
    const normalMenor = 18.5;
    const normalMaior = 24.9;
    const sobrepesoMenor = 25.0;
    const sobrepesoMaior = 29.9;
    const obesidadeGrau1Menor = 30.0;
    const obesidadeGrau1Maior = 34.9;
    const obesidadeGrau2Menor = 35.0;
    const obesidadeGrau2Maior = 39.9;

    if (imc < magreza) {
      setResultado("MAGREZA");
    } else if (imc > normalMenor && imc < normalMaior) {
      setResultado("SAUDÁVEL");
    } else if (imc > sobrepesoMenor && imc < sobrepesoMaior) {
      setResultado("SOBREPESO");
    } else if (imc > obesidadeGrau1Menor && imc < obesidadeGrau1Maior) {
      setResultado("OBESIDADE GRAU 1");
    } else if (imc > obesidadeGrau2Menor && imc < obesidadeGrau2Maior) {
      setResultado("OBESIDADE GRAU 2");
    } else {
      setResultado("OBESIDADE GRAU 3");
    }
  }, [imc, setResultado]);

  const calculo = () => {
    const currentDate = new Date();
    const dataFormatada = format(currentDate, "yyyy/MM/dd");
    const weightEntry = { date: dataFormatada, weight: parseFloat(weight) };
    const updatedWeights = [...storedWeights, weightEntry];
    salvarNoLocalStorage("peso", updatedWeights);
    setImc(+weight / +(height * height));
    const imcAtual = imc.toFixed(2);
    salvarNoLocalStorage("imc", imcAtual);
  };

  return (
    <div>
      <h1 className="text-3xl text-center font-bold md:text-5xl md:pb-5">
        {" "}
        CALCULADORA IMC
      </h1>
      <div className="flex flex-col gap-5 mt-8 m-auto md:text-3xl md:pb-5">
        <div className="flex justify-between items-center relative md:w-full">
          <label htmlFor="height">Height</label>
          <input
            className="form-input rounded-full border-0 shadow drop-shadow-md focus:ring-0 placeholder:text-zinc-400 w-52 flex placeholder:text-end placeholder:pr-4 placeholder:font-normal md:w-80 md:placeholder:pr-8  font-medium p-5"
            onChange={handleChangeHeight}
            name="height"
            type="number"
            placeholder="1.65"
          />
          <span className="absolute right-2">M</span>
        </div>
        <div className="flex justify-between items-center relative">
          <label htmlFor="weight">Weight</label>
          <input
            className="form-input rounded-full border-0 shadow drop-shadow-md focus:ring-0 placeholder:text-zinc-400 w-52 flex placeholder:text-end placeholder:pr-4 placeholder:font-normal md:w-80 md:placeholder:pr-8 font-medium p-5"
            onChange={handleChangeWeight}
            name="weight"
            type="number"
            placeholder="52.0"
          />
          <span className="absolute right-1">Kg</span>
        </div>
      </div>
      <button
        className="flex mt-8 justify-center m-auto pr-10 pl-10 pt-4 pb-4 rounded hover:bg-dark-green transition duration-150 ease bg-main-green text-white items-center"
        onClick={() => calculo()}
      >
        CALCULAR
      </button>
      <div className="mt-8 text-center">
        {imc ? (
          <div>
            <p className="flex justify-center text-zinc-400 text-sm md:p-7 md:text-lg">
              SEU ESTADO ATUAL É
            </p>
            <p className="text-[39px] md:text-7xl md:pb-5">{resultado}</p>
          </div>
        ) : (
          "adicione sua altura e peso"
        )}
      </div>
    </div>
  );
}
