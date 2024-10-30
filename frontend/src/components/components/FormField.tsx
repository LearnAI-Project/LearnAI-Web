import { Link } from "react-router-dom";

export const DefaultField = ({
  text,
  type,
}: {
  text: string;
  type: "text" | "email";
}) => {
  return (
    <div className="form__field">
      <label className="interactive--xl">{text}</label>
      <input
        className="input input--form interactive--lg"
        type={type}
        placeholder={"Ingresa tu " + text.toLowerCase()}
        required
      />
    </div>
  );
};

export const PasswordField = ({
  url,
  type,
}: {
  url: string;
  type: "default" | "repeated" | "linked";
}) => {
  const labelTexts = {
    default: {
      label: "Contraseña",
      placeholder: "Ingresa tu contraseña",
    },
    repeated: {
      label: "Repite tu contraseña",
      placeholder: "Repite tu contraseña",
    },
    linked: {
      label: "Contraseña",
      placeholder: "Ingresa tu contraseña",
    },
  };

  return (
    <div className="form__field">
      <div className="d-flex justify-between gap-2 interactive--xl">
        <label>{labelTexts[type].label}</label>
        {type === "linked" && (
          <Link className="link" to={url}>
            ¿Has olvidado tu contraseña?
          </Link>
        )}
      </div>
      <input
        className="input input--form interactive--lg"
        type="password"
        placeholder={labelTexts[type].placeholder}
        required
      />
    </div>
  );
};
