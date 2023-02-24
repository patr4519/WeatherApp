import React from "react";
import CityCard from "./components/CityCard";

const link =
  "http://api.weatherstack.com/current?access_key=c143f2db1cb2ce460b52161b01defa10&query=";

const defaultCities = ["Rostov-on-Don"];
// const defaultCities = ["Moscow", "Rostov-on-Don", "Krasnodar"];

function App() {
  const [items, setItems] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");

  const onChangeValue = (e) => {
    setInputValue(e);
  }

  React.useEffect(() => {
    let requests = defaultCities.map((city) => fetch(`${link}${city}}`));

    Promise.all(requests)
      .then((responses) => Promise.all(responses.map((r) => r.json())))
      .then((result) => setItems(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <input
        placeholder="Input your city..."
        value={inputValue}
        onChange={(e) => onChangeValue(e.target.value)}
      />
      <div className="cards">
        {items.map((item, index) => (
          <CityCard
            current={item.current}
            location={item.location}
            request={item.request}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
