import { Suspense, useState } from "react"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Techs from "./components/techStacks/Techs"
import type { ITechs } from "./types/techs"

const techPromise = async (): Promise<ITechs[]> => {
  const res = await fetch('/data.json'); 
  const data = await res.json(); 
  return data; 
}

function App() { 
  const [techsPromise] = useState<Promise<ITechs[]>>(() => techPromise()); 

  const [stack, setStack] = useState<ITechs[]>([])

  return (
    <>
      <Navbar />
      <Banner />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Techs 
        techsPromise={techsPromise} 
        stack={stack}
        setStack={setStack}
        />
      </Suspense>
      <Footer />
    </>
  )
}

export default App
