import { Link } from "react-router-dom";
import {
  DefaultField,
  PasswordField,
} from "../../components/components/FormField";
import { Navbar } from "../../components/layout/navbar";
import { SubmitButton } from "../../components/elements/buttons";

export const Login = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="flexbox flexbox--center">
        <section className="container container--auth">
          <div className="subcontainer--auth d-flex f-col gap-1">
            <div className="d-flex f-col gap-1">
              <h1 className="title--lg">Iniciar Sesión</h1>
              <p className="interactive--xl">
                ¿No tienes una cuenta aún?{" "}
                <Link className="link" to="/register">
                  Regístrate
                </Link>
              </p>
            </div>
            <form className="form form--auth" action="/" method="">
              <DefaultField text="Correo" type="text" />
              <PasswordField url="/forgot-your-password" type="linked"/>
              <div className="form__field form__field--rememberme">
                <input className="" type="checkbox" />
                <label className="interactive--lg">Recuérdame</label>
              </div>
              <SubmitButton type="default" text="Ingresar" />
            </form>

            <div>
              <hr />
            </div>
            <form
              className="form form--auth"
              action="/oauth2/authorization/google"
              method="get"
            >
              <SubmitButton type="google" text="Ingresar con Google" />
            </form>
          </div>
          <div className="subcontainer--auth">
            <img
              height="400"
              src="https://st2.depositphotos.com/2419757/43548/v/450/depositphotos_435482738-stock-illustration-business-person-sitting-at-table.jpg"
              alt="Login image"
            />
          </div>
        </section>
      </main>
    </>
  );
};
