import React from "react";

const navbarStyle = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  backgroundColor: "white",
  boxShadow: "10px 5px 5px 5px gray",
  height: "50px",
};
const buttonStyleAcceuil = {
  backgroundColor: "#3d83df",
  color: "white",
  border: "none",
  fontWeight: "bold",
  width: "50px",
};
const buttonSecpnd = { ...buttonStyleAcceuil, backgroundColor: "#FF007F" };
function CustomNavbar() {
  const user = "Wafi Benjeddou";
  const userInTable = user.split(" ");
  const caracterOne = userInTable[0][0];
  const caracterTwo = userInTable[1][0];
  return (
    <div style={navbarStyle}>
      <button style={buttonStyleAcceuil}>Acceul</button>
      <button style={buttonSecpnd}>{`${caracterOne} ${caracterTwo}`}</button>
    </div>
  );
}

export default CustomNavbar;
