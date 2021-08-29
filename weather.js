const loadData = async () => {
  const key = "3507d56dabc44ec3aa5101859212908";
  const city = document.getElementById("search-city");

  const cityName = city.value;
  const url = `https://api.weatherapi.com/v1/current.json?key=3507d56dabc44ec3aa5101859212908&q=${cityName}&aqi=no`;

  const res = await fetch(url);
  const data = await res.json();
  city.value = "";
  showWeather(data);
};

const showWeather = (forecast) => {
  console.log(forecast);
  //   let {
  //     location: { name, country },
  //     current: {
  //       condition: { icon, text },
  //       feelslike_c,
  //     },
  //   } = forecast;

  let {
    feelslike_c,
    condition: { icon, text },
  } = forecast.current;

  let { name, country } = forecast.location;
  console.log(name, country);
  console.log(feelslike_c);
  console.log(icon, text);

  const parent = document.getElementById("parent");
  parent.innerHTML = "";
  const div = document.createElement("div");

  div.innerHTML = `
        <img src="https:${icon}" alt="icon not available" />
        <h1>${name}</h1>
        <h1 class="lead">${country}</h1>
        <h3><span>${feelslike_c}</span>&deg;C</h3>
        <h3>${text}</h3>
  `;

  parent.appendChild(div);
  //   console.log(current);
  //   console.log(name);
  //   console.log(country);
  //   console.log(icon);
  //   console.log(feelslike_c);
  //   console.log(text);
};
