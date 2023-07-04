import './App.css';
import { NavMenu } from './components/NavMenu';
import { MainRoute } from './routes/MainRoute';

function App() {
  return (
    <div className="container-full h-screen bg-gradient-to-r from-blue-600 to-blue-700 overflow-hidden">
      <nav>
        <NavMenu/>
      </nav>
      <MainRoute/>
    </div>
  );
}

export default App;
