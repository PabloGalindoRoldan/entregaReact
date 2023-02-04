import React from "react";
import { useNavigate } from "react-router-dom";
import "./pageNotFound.css"

function PageNotFound() {
    const navigate = useNavigate();

    setTimeout(() => {
        navigate("/");
    }, 2000);

    return (
        <div className="containerPaginaNoEncontrada">
            <img className="errorImg" src="../imgs/error.jpg"></img>
        </div>
    );
}

export default PageNotFound;
