import "./formCheckout.css"
import React, { useState } from "react";
import { useContext } from "react";
import { cartContext } from "../../storage/cartContext";
import Button from "../Button/Button";

function InputForm(props) {
    return (
        <div className="input">
            <label style={{ width: "100px", marginRight: 4 }}>{props.label}</label>
            <input
                value={props.value}
                name={props.name}
                type="text"
                onChange={props.onChange}
            />
        </div>
    );
}

export default function FormCheckout(props) {
    const { clear } = useContext(cartContext);
    const [userData, setUserData] = useState({
        name: "",
        phone: "",
        email: "",
    });

    let fieldsForm = Object.keys(userData);

    function onInputChange(evt) {
        let value = evt.target.value;
        let inputName = evt.target.name;

        let newState = { ...userData };
        newState[inputName] = value;
        setUserData(newState);
    }

    function onSubmit(evt) {
        evt.preventDefault();
    }

    function formIsInvalid() {
        return !(
            userData.name !== "" &&
            userData.phone !== "" &&
            userData.email !== ""
        );
    }

    return (
        <form className="formBody" onSubmit={onSubmit}>
            <h1>Completa los datos y finaliza la compra</h1>
            {fieldsForm.map((field) => (
                <InputForm
                    key = {field}
                    value={userData[field]}
                    name={field}
                    onChange={onInputChange}
                    label={field}
                    userData={userData}
                />
            ))}
            <div className="divButtons">
                <Button
                    onClick={(evt) => {
                        props.onCheckout(evt, userData)
                        clear()
                    }}
                    disabled={formIsInvalid()}
                    type="submit"
                >
                    Crear orden
                </Button>

                <Button onClick={() => setUserData({ name: "", email: "", phone: "" })}>
                    Limpiar Formulario
                </Button>
            </div>
        </form>
    );
}