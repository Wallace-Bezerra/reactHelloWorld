import Title from "../src/components/title/Title"
import Subtitle from "../src/components/subtitle/Subtitle"

function HomePage(){
  return (
    <div>
      <Title>
        meu primeiro titulo
      </Title> 
      Hello World, NextJs + ReactJs
      <Subtitle 
      text="Sub"
      />

    </div>
  )
}

export default HomePage