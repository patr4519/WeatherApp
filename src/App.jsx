import React from "react";
import CityCard from "./components/CityCard";

// key 7a8d834ef4324d18161ffc2d94c7657e

const link =
  "http://api.weatherstack.com/current?access_key=7a8d834ef4324d18161ffc2d94c7657e&query=";

const defaultCities = ["Rostov-on-Don"];
// const defaultCities = ["Moscow", "Rostov-on-Don", "Krasnodar", "Tikhoretsk"];

function App() {
  const [items, setItems] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");

  const onChangeValue = (e) => {
    setInputValue(e);
  };

  const onClickOk = () => {
    const request = fetch(`${link}${inputValue}`);
    request
      .then((res) => res.json())
      .then((result) => setItems([result]))
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    let requests = defaultCities.map((city) => fetch(`${link}${city}}`));

    Promise.all(requests)
      .then((responses) => Promise.all(responses.map((r) => r.json())))
      .then((result) => setItems(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <div className="inputSearch">
        <input
          placeholder="Input your city..."
          value={inputValue}
          onChange={(e) => onChangeValue(e.target.value)}
        />
        <button onClick={onClickOk}>Ok</button>
      </div>
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
