import './App.css';
import { NavMenu } from './components/NavMenu';
import { Socials } from './components/Socials';

function App() {
  return (
    <div className="container-full h-screen bg-emerald-600">
        <nav>
          <NavMenu/>
        </nav>
        <div className="container-full flex justify-end overflow-hidden">
          <Socials/>
        </div>
    </div>
  );
}

export default App;
