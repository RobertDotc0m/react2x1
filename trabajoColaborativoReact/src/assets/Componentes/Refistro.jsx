import React, { useState } from "react";
import { Formulario } from "./Formulario";
import SocialButton from "./SocialButton";
import {
  faGithub,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export const Registro = () => {
  const [alert, Alerts] = useState({
    error: "",
    mensaje: "",
    color: "",
  });

  return (
    <>
      <h1>Crea una cuenta</h1>
      <SocialButton
        faGithub={faGithub}
        faFacebook={faFacebook}
        faLinkedin={faLinkedin}
      />
      <Formulario Alerts={Alerts} />

      {alert.mensaje && (
        <div style={{ color: alert.color }}>{alert.mensaje}</div>
      )}
    </>
  );
};
