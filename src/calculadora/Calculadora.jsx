import React, { useEffect, useState } from "react";

export default function Calculadora() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [imc, setImc] = useState(0);
  const [resultado, setResultado] = useState("");

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
  }, [imc]);

  const calculo = () => {
    setImc(+weight / +(height * height));
  };
  // const exibirImc = () => {
  // }
  return (
    <div className="flex flex-col items-center">
      <div className="mt-10 md:w-fit">
        <h1 className="text-3xl font-bold underline md:text-5xl md:pb-5">
          {" "}
          CALCULADORA IMC
        </h1>
        <div className="flex flex-col gap-5 mt-8 mb-5 items-center md:text-3xl md:pb-5">
          <div className="flex justify-between w-72 items-center relative md:w-full">
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
          <div className="flex justify-between w-72 items-center relative md:w-full">
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
          className="w-28 h-9 rounded hover:bg-dark-green transition duration-150 ease bg-main-green text-white"
          onClick={() => calculo()}
        >
          CALCULAR
        </button>
      </div>
      <div className="mt-8">
        {imc ? (
          <div>
            <p className="text-zinc-400 text-sm md:p-7 md:text-lg">
              SEU ESTADO ATUAL É
            </p>
            <p className="text-[39px] md:text-8xl md:pb-5">{resultado}</p>
            {/* <p className='text-zinc-400 text-sm'>SEU PESO IDEAL É</p> */}
            {/* <p className='text-[39px]'>{resultado}</p> */}
          </div>
        ) : (
          "adicione sua altura e peso"
        )}
      </div>
    </div>
  );
}
