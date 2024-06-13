import React from "react";
import { useSelector } from "react-redux";

const Test = () => {
  const themeColor = useSelector((state) => state.theme.value);
  const user = useSelector((state) => state.user.value);
  return (
    <div
      style={{
        backgroundColor: themeColor,
        padding: "100px",
        margin: "100px",
      }}
    >
      <h1>Detail of the porject</h1>
      <h3>
        I used redux toolkit in this project and created two reducers. One for
        the userState management and second for thame state management. <b />
        Then I saved the themeState in local storage for default values.
        <br /> Then I added default color green that after every 7 secs it will
        automatically become green.
      </h3>
    </div>
  );
};

export default Test;
