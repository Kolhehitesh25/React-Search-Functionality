import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Table from "./Table";
function App() {
  const [query, setQuery] = useState("");
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(`http://localhost:5000?q=${query}`);
      setdata(res.data);
    };
    if (query.length === 0 || query.length > 2) fetchUsers();
  }, [query]);

  // const keys = ["first_name", "last_name", "email", "gender"];

  // const search = (data) => {
  //   return data.filter((item) =>
  //     keys.some((key) => item[key].toLowerCase().includes(query))
  //   );
  // };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="search ..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />

      <Table data={data} />
    </div>
  );
}

export default App;
