import './App.css';
import Router from './rooter/Rooter';
import { DataProvider } from './contexts/Data';

function App() {
  return (
      <DataProvider>
        <Router></Router>
      </DataProvider>
    
  );
}

export default App;
