import axios from "axios";
import CityCard from "./components/CityCard";

const link = "http://api.weatherstack.com/current?access_key=9d88ccefa0f2f87dad31ead04289a0fc&query=";

const moscow = "Moscow";
const rostov = "Rostov-on-Don";
const krasnodar = "Krasnodar";

function App() {
  const fetchData = async () => {
    const { data } = await axios(
      `${link}${moscow}}`
    );
    console.log(data);
  };

  // fetchData();

  return (
    <div className="App">
      <CityCard />
    </div>
  );
}

export default App;
