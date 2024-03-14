import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import "./home.css";

const Home = () => {
  const [ApiDataJokes, setApiData] = useState([]);

  const Navigate = useNavigate();

  useEffect(() => {
    getjokeData();
  }, []);

  const getjokeData = () => {
    fetch(
      "https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10"
    )
      .then((response) => response.json())
      .then((data) => {
        setApiData(data.jokes);
      });
  };

  const onClickLogout = () => {
    Navigate("/jokeslogin-app/login");
  };

  const Fetchjoke = () => {
    getjokeData();
  };

  return (
    <div className="Home-container">
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th className="table-heading">Jokes</th>
            </tr>
          </thead>
          <tbody>
            {ApiDataJokes.map((eachitem, index) => (
              <tr key={index}>
                <td className="font-style">{eachitem.joke}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <button type="button" onClick={Fetchjoke} className="fetch-jokes-btn">
          Fetch joke
        </button>
        <button type="button" onClick={onClickLogout} className="logout-btn">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
