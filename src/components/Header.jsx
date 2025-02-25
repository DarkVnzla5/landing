import DarkMode from "./DarkMode";
import { RxActivityLog } from "react-icons/rx";

export default function Header() {
  return (
    <nav className="dark:bg-primary dark:text-secondary lg:w-full md:w-full sm:w-full pt-5 pb-5 justify-evenly flex flex-wrap sm:grid-cols-2 gap-2 text-center font-bold font-radio text-secondary border-2 border-t-0 border-l-0 border-r-0 border-b-primary">
      <section>
        <article>
          <div className="w-32">
            <a href="#">
              <img src="/truck-bi-logo-CbIBFuIy.svg" alt="Logo" />
            </a>
          </div>
        </article>
      </section>
      <section className="max-lg:hidden">
        <article>
          <div>
            <button className="hover:bg-primary text-secondary hover:border-secondary  hover:border-2 rounded p-1">
              <a href="#"> Acerca de Nosotros</a>
            </button>
          </div>
        </article>
        <article>
          <div>
            <button className="hover:bg-primary text-secondary hover:border-secondary  hover:border-2 rounded p-1">
              <a href="#"> Precios</a>
            </button>
          </div>
        </article>
        <article>
          <div>
            <button className="hover:bg-primary text-secondary hover:border-secondary  hover:border-2 rounded p-1">
              <a href="#">Demo</a>
            </button>
          </div>
        </article>
        <article>
          <div>
            <button className="hover:bg-primary text-secondary hover:border-secondary  hover:border-2 rounded p-1">
              <a href="#"> Iniciar Sesion</a>
            </button>
          </div>
        </article>
      </section>
      <section className="lg:hidden">
        <article>
          <button className="justify-center text-primary hover:text-secondary">
            <RxActivityLog className="size-9" />
          </button>
        </article>
      </section>
      <section>
        <article>
          <DarkMode />
        </article>
      </section>
    </nav>
  );
}
