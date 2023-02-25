import React from "react";
import CityCard from "./components/CityCard";
import Skeleton from "./components/Skeleton";

// key 7a8d834ef4324d18161ffc2d94c7657e

const link =
  "http://api.weatherstack.com/current?access_key=7a8d834ef4324d18161ffc2d94c7657e&query=";

// const defaultCities = ["Rostov-on-Don"];
const defaultCities = ["Moscow", "Rostov-on-Don", "Krasnodar"];

function App() {
  const [items, setItems] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");
  const [initLoading, setInitLoading] = React.useState(false);

  const onChangeValue = (e) => {
    setInputValue(e);
  };

  const onClickOk = () => {
    const request = fetch(`${link}${inputValue}`);
    request
      .then((res) => res.json())
      .then((result) => setItems([result]))
      .then(setInputValue(''))
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    let requests = defaultCities.map((city) => fetch(`${link}${city}}`));

    Promise.all(requests)
      .then((responses) => Promise.all(responses.map((r) => r.json())))
      .then((result) => setItems(result))
      .then(() => setInitLoading(true))
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
        {initLoading ? (
          items.map((item, index) => (
            <CityCard
              current={item.current}
              location={item.location}
              request={item.request}
              key={index}
            />
          ))
        ) : (
          <div className="skeletons">
            <div className="skeleton"><Skeleton /></div>
            <div className="skeleton"><Skeleton /></div>
            <div className="skeleton"><Skeleton /></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
