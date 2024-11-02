import { Link } from "react-router-dom";
import {
  DefaultField,
  PasswordField,
} from "../../components/modules/components/FormField";
import { Navbar } from "../../components/modules/layout/navbar";
import { SubmitButton } from "../../components/modules/elements/buttons";

export const Register = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="flexbox flexbox--center main">
        <section className="container container--auth">
          <div className="subcontainer--auth">
            <div className="d-flex f-col gap-1">
              <h1 className="title--lg">Regístrate</h1>
              <p className="interactive--xl">
                ¿Ya tienes una cuenta?{" "}
                <Link className="link" to="/login">
                  Inicia Sesión
                </Link>
              </p>
            </div>
            <form className="form form--auth" action="/login" method="post">
              <div className="flexbox gap-2 f-wrap">
                <DefaultField text="Usuario" type="text" />
                <DefaultField text="Correo" type="email" />
              </div>
              <div className="flexbox gap-2 f-wrap">
                <PasswordField url="/forgot-your-password" type="default" />
                <PasswordField url="/forgot-your-password" type="repeated" />
              </div>
              <SubmitButton type="default" text="Regístrate" />
            </form>

            <div>
              <hr />
            </div>
            <form
              className="form form--auth"
              action="/oauth2/authorization/google"
              method="get"
            >
              <SubmitButton type="google" text="Regístrate con Google" />
            </form>
          </div>
        </section>
      </main>
    </>
  );
};
