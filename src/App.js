import "./App.css";
import ChangeColor from "./components/ChangeColor";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Test from "./components/Test";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.value);


  return (
    <div className="App">
      <Profile />
      <Login />
      {user.email === "Ahmad@gmail.com" ? (
        <>
          <ChangeColor />
          <Test />
        </>
      ) : null}
    </div>
  );
}

export default App;
