import './App.css';
import { NavMenu } from './components/NavMenu';
import { Home } from './pages/Home';
import { MainRoute } from './routes/MainRoute';

function App() {
  return (
    <div className="container-full h-screen bg-indigo-600">
      <nav>
        <NavMenu/>
      </nav>
      <MainRoute/>
    </div>
  );
}

export default App;
