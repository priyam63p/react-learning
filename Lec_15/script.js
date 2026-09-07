import react from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Header from "./Header";
import Card from "./Card";
import stored from "./stored";

function App() {
  return (
    // <Provider store={}>

    // </Provider>
    <Provider store={stored}>
      <Header></Header>
      <Card></Card>
    </Provider>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
