import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import { movData } from './appdata';

function App() {
  return (
    <div id="app-container">
      <NavBar />
      <HeroSection src={movData.library[0].imageUrls.billboard} />
    </div>
  );
}

console.log(movData);

export default App;
