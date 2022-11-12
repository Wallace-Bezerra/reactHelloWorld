import Title from "../src/components/title/Title";
import Subtitle from "../src/components/subtitle/Subtitle";

function HomePage() {
  return (
    <div>
      <Title>meu primeiro titulo</Title>
      Hello World, NextJs + ReactJs
      <Subtitle text="Bem vindo ao React" />
      <Subtitle text="Bem vindo ao Next.Js" />
      <Subtitle text="Bem vindo ao jS" />
      <Subtitle/>
    </div>
  );
}

export default HomePage;
