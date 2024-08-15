import "./index.css";
import Block from "./components/Block";
import { ReactLenis, useLenis } from "lenis/react";
// imported images
import imageOne from "./imgs/dynamic-wang-GTPYuADmQ8c-unsplash.jpg";
import imageTwo from "./imgs/two.jpg";
import imageThree from "./imgs/three.jpg";
import imageFour from "./imgs/eveling-salazar-ye9Uj9zI0oo-unsplash.jpg";
import imageFive from "./imgs/five.jpg";
import imageSix from "./imgs/six.jpg";
import imageSeven from "./imgs/7.jpg";
import imageEight from "./imgs/8.jpg";
import imageNine from "./imgs/9.jpg";
import imageTen from "./imgs/10.jpg";
import imageEleven from "./imgs/11.jpg";
import imageTwelve from "./imgs/12.jpg";
import imageThirteen from "./imgs/13.jpg";
import imageFourteen from "./imgs/14.jpg";
import imageFifthteen from "./imgs/15.jpg";
import imageSixteen from "./imgs/16.jpg";
import imageSeventeen from "./imgs/17.jpg";

function App() {
  // integrating lenis smooth scroll into app
  const lenis = useLenis(({ scroll }) => {});
  return (
    <ReactLenis root>
      <div className="App">
        {/* <h4>pics /</h4> */}
        <div className="circle"></div>
        <div className="blockContainer">
          <Block letter="A" backgroundImage={imageOne} />
          <Block letter="B" backgroundImage={imageTwo} />
          <Block letter="C" backgroundImage={imageThree} />
          <Block letter="D" backgroundImage={imageFour} />
          <Block letter="E" backgroundImage={imageFive} />
          <Block letter="F" backgroundImage={imageSix} />
          <Block letter="G" backgroundImage={imageSeven} />
          <Block letter="H" backgroundImage={imageEight} />
          <Block letter="I" backgroundImage={imageNine} />
          <Block letter="J" backgroundImage={imageTen} />
          <Block letter="K" backgroundImage={imageEleven} />
          <Block letter="L" backgroundImage={imageTwelve} />
          <Block letter="M" backgroundImage={imageThirteen} />
          <Block letter="N" backgroundImage={imageFourteen} />
          <Block letter="O" backgroundImage={imageFifthteen} />
          <Block letter="P" backgroundImage={imageSixteen} />
        </div>
        <div className="clear"></div>
      </div>
    </ReactLenis>
  );
}

export default App;
