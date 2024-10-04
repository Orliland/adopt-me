const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.bread),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      animal: "Dog",
      name: "frijolito",
      bread: "Chihuahua",
    }),
    React.createElement(Pet, {
      animal: "Cat",
      name: "Arenita",
      bread: "unknow",
    }),
    React.createElement(Pet, {
      animal: "Dog",
      name: "Darco",
      bread: "Chihuahua",
    }),
  ]);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));
