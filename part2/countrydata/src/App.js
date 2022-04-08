import axios from 'axios';

function App() {
  axios
    .get('https://restcountries.com/v2/all')
    .then((response) => console.log(response.data));

  return <div>Lalaallalalal</div>;
}

export default App;
