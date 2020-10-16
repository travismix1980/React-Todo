import React from "react";

const Header = () =>{
    return (
        <header style={headerStyle}>
            <h1>Todo List</h1>
        </header>
    );
}

const headerStyle = {
    backgroundColor: "#333",
    color: "white",
    textAlign: "center",
    padding: "10px",
}

export default Header;