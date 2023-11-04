import { useState } from "react";

export const Formulario = ({ Alerts }) => {
  const [fromData, setFromData] = useState({
    nombre: "",
    email: "",
    contraseña: "",
    confirmaTuContraseña: "",
  });

  const confirmarDatos = (e) => {
    e.preventDefault();

    const { nombre, email, contraseña, confirmaTuContraseña } = fromData;
    const validarImput =
      !nombre || !email || !contraseña || !confirmaTuContraseña;
    const validarContraseña = contraseña !== confirmaTuContraseña;

    validarImput
      ? Alerts({
          error: true,
          mensaje: "valida tus datos",
          color: "danger",
        })
      : Alerts({
          error: false,
          mensaje: "cuenta exitosa",
          color: "success",
        });
    if (validarContraseña) {
      Alerts({
        error: true,
        mensaje: "las contrraseñas no son iguales",
        color: "danger",
      });
      return;
    }
    setFromData({
      nombre: "",
      email: "",
      contraseña: "",
      confirmaTuContraseña: "",
    });
  };
  const ingresarDatos = (e) => {
    setFromData({ ...fromData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form className="forumulario" onSubmit={confirmarDatos}>
        <div className="imputs">
          <input
            type="text"
            name="nombre"
            className=""
            placeholder="Nombre"
            value={fromData.nombre}
            onChange={ingresarDatos}
          />
        </div>
        <div className="imputs">
          <input
            type="email"
            name="email"
            className=""
            placeholder="email"
            value={fromData.email}
            onChange={ingresarDatos}
          />
        </div>
        <div className="imputs">
          <input
            type="password"
            name="contraseña"
            className=""
            placeholder="Contraseña"
            value={fromData.contraseña}
            onChange={ingresarDatos}
          />
        </div>
        <div className="imputs">
          <input
            type="password"
            name="confirmaTuContraseña"
            className=""
            placeholder="Confirma tu contraseña
          "
            value={fromData.confirmaTuContraseña}
            onChange={ingresarDatos}
          />
        </div>
        <div className="boton">
          <button type="submit" className="colorboton">
            ➡️ Acceda a aqui ⬅️
          </button>
        </div>
      </form>
    </>
  );
};
