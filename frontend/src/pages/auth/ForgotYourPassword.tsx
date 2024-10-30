import { DefaultField } from "../../components/components/FormField";
import { Navbar } from "../../components/layout/navbar";
import { SubmitButton } from "../../components/elements/buttons";

export const ForgotYourPassword = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="flexbox flexbox--center">
        <section className="container container--auth">
          <div className="subcontainer--auth d-flex f-col gap-1">
            <div className="d-flex f-col gap-1">
              <h1 className="title--lg">Recupera tu cuenta</h1>
              <p className="interactive--xl">
                Ingresa el código que enviamos a tu correo electrónico.
              </p>
            </div>
            <form className="form form--auth">
              <DefaultField text="Código de verificación" type="email" />
              <SubmitButton type="default" text="Ingresar" />
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
