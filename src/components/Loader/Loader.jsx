import React from "react";
import {Oval} from "react-loader-spinner"

function Loader(props) {
    let styleContainer = {
        display: "flex",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
    };

    return (
        <div style={styleContainer}>
            <Oval
    ariaLabel="loading-indicator"
    height={100}
    width={100}
    strokeWidth={5}
    strokeWidthSecondary={1}
    color="blue"
    secondaryColor="white"
    {...props}
/>
        </div>
    );
}

export default Loader;
