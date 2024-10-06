import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me !</h1>
      <Pet name="Frijolit" animal="dog" bread="Chihuahua" />
      <Pet name="Arenita" animal="Cat" bread="Petite" />
      <Pet name="Darco" animal="dog" bread="Pastor Aleman" />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(<App />));
