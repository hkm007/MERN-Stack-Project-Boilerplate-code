import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/veggies");
        setData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h2>List of Veggies: </h2>
      <ul>
        {data.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
