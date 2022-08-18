import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { setCities, setSearch, fetchApi } from "./actions/index";
import { useEffect } from "react";
import axios from "axios";
function App(props) {
  const myCity = useSelector((state) => state.setCity);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchApi(myCity.search));
  }, [myCity.search]);
  return (
    <>
      <div
        className="container-fluid bg-primary p-4"
        style={{ width: "300px", height: "400px" }}
      >
        <div>
          <input
            type="search"
            className="border-1  rounded-pill m-auto"
            onChange={(event) => {
              dispatch(setSearch(event.target.value));
            }}
          />
        </div>
        {!myCity.city ? (
          <p>No Data Found</p>
        ) : (
          <div className="text-center pt-5">
            <h2>
              <i className="fas fa-street-view">{myCity.search}</i>
            </h2>
            <h1>{myCity.city.temp}°C</h1>
            <h6>
              Min: {myCity.city.temp_min}°C | Max: {myCity.city.temp_max}°C
            </h6>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
