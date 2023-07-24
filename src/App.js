import Child from "./Child";
import "./styles.css";

export default function App() {
  let getDataFromChild = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      <label htmlFor="Name">Name</label>
      <input type="text" />
      <Child parentFunc={getDataFromChild} />
    </div>
  );
}
