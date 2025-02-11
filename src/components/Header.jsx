export default function Header() {
  return (
    <div className="lg:w-full md:w-full sm:w-full pt-5 pb-5 justify-evenly flex flex-wrap sm:grid-cols-2 gap-2 text-center font-bold font-radio text-secondary border-2 border-t-0 border-l-0 border-r-0 border-b-primary">
      <div className="w-32">
        <a href="#">
          <img src="/truck-bi-logo-CbIBFuIy.svg" alt="Logo" />
        </a>
      </div>
      <div>
        <div>
          <button className="hover:bg-primarytext-secondary hover:border-secondary  hover:border-2 rounded p-1">
            <a href="#"> Acerca de Nosotros</a>
          </button>
        </div>
      </div>
      <div>
        <div>
          <button className="hover:bg-primary text-secondary hover:border-secondary  hover:border-2 rounded p-1">
            <a href="#">Tarifas</a>
          </button>
        </div>
      </div>
      <div>
        <div>
          <button className="hover:bg-primary text-secondary hover:border-secondary  hover:border-2 rounded p-1">
            <a href="#">Iniciar Sesion</a>
          </button>
        </div>
      </div>
      <div>
        <div>
          <button className="hover:bg-primary text-secondary hover:border-secondary hover:border-2 rounded p-1">
            <a href="#"> Demo </a>
          </button>
        </div>
      </div>
    </div>
  );
}
