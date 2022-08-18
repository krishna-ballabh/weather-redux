import axios from "axios";

export const fetchApi = (myCity) => {
  return async function (dispatch, getState) {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${myCity}&units=metric&appid=35d0fe7a4804b188e3573df9e1bf9628`
    );
    console.log(response.data.main);
    dispatch({ type: "Fetch_Weather", payload: response.data.main });
  };
};
export const setSearch = (search) => {
  let payload = {
    search: search,
  };
  return {
    type: "SEARCH",
    payload,
  };
};
