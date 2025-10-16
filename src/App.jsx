import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import NextRace from './Components/NextRace/NextRace';
import PreviousRace from './Components/PreviousRace/PreviousRace'
import PreviousRaceBottom from './Components/PreviousRaceBottom/PreviousRaceBottom';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <PreviousRace />
      <PreviousRaceBottom />
      <NextRace/>
    </>
  )
}

export default App
