import { useAuth } from "./contexts/AuthContext";
import "./App.css";

function App() {
  const data = useAuth();
  return (
    <div>
      <p>{data}</p>
    </div>
  );
}

export default App;
