import React, { useEffect, useState } from "react";
// rfce is used to make a simple function using snippets and rafce is used to make arrow function.
import { useDispatch } from "react-redux";
import { changeColor } from "../features/theme";
const ChangeColor = () => {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();

  const handleRedColor = () => {
    dispatch(changeColor("red"));
    localStorage.setItem("userTheme", "red");
    handleChangetoDefaultAfterEveryThemeChanges();
  };

  const handleOptionChange = (event) => {
    const selectedColor = event.target.value;
    setColor(selectedColor);
    localStorage.setItem("userTheme", selectedColor);
    dispatch(changeColor(selectedColor));
    handleChangetoDefaultAfterEveryThemeChanges();
  };

  const handleDefaultTheme = () => {
    dispatch(changeColor("orange"));
    handleChangetoDefaultAfterEveryThemeChanges();
  };

  const handleChangetoDefaultAfterEveryThemeChanges = () => {
    setTimeout(function () {
      const defaultColor = "orange"; // Change this to your default color
      dispatch(changeColor(defaultColor));
      localStorage.setItem("userTheme", defaultColor);
    }, 7000);
  };

  useEffect(() => {
    handleChangetoDefaultAfterEveryThemeChanges();
  }, []);

  return (
    <div>
      <button
        style={{ margin: "40px", backgroundColor: "red" }}
        onClick={() => {
          handleRedColor();
        }}
      >
        ChangeThemeToRed
      </button>

      <label htmlFor="colorSelect">Change Color:</label>
      <select
        id="colorSelect"
        onChange={(event) => handleOptionChange(event)}
        style={{ margin: "10px", width: "300px", height: "40px" }}
      >
        <label>change Color</label>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="purple">purple</option>
        <option value="gray">gray</option>
        <option value="darkblue">darkblue</option>
      </select>

      <button
        onClick={() => {
          handleDefaultTheme();
        }}
      >
        default
      </button>
    </div>
  );
};

export default ChangeColor;
