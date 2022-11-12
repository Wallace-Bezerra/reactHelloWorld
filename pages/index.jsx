import Title from "../src/components/title/Title";
import Subtitle from "../src/components/subtitle/Subtitle";
import Button from "../src/components/button/Button";
import { useState } from "react";

function HomePage() {
  const [contador, setContador] = useState(0);

  function handleClick() {
    setContador(++contador);
    // console.log(contador);
  }

  return (
    <div>
      <Title>meu primeiro titulo</Title>
      Hello World, NextJs + ReactJs
      <Subtitle text="Bem vindo ao React" />
      <Subtitle text="Bem vindo ao Next.Js" />
      <Subtitle text="Bem vindo ao jS" />
      <Subtitle />
      <Button click={handleClick}>{contador}</Button>
    </div>
  );
}

export default HomePage;
