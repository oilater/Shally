import { Slide } from "./motion/Slide"
import Shally from "./shally/Shally"

function App() {
  return (
    <>
      <Shally startMotion={Slide('in').translateX({to: 30}).opacity({to: 1}).duration(10)}>
        <h1>Hello World</h1>
      </Shally>
    </>
  )
}

export default App
