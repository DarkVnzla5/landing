export default function Footer() {
  return (
    <section className="p-4 border-t-secondary border-2 border-r-0 border-l-0 text-primary text-2xl font-bold max-md:p-8 max-lg:p-10">
      <article className="mx-auto max-w-screen-xl text-center">
        <a
          href="#"
          className="flex justify-center items-center text-2xl font-semibold "
        >
          <img src="/truck-bi-logo-CbIBFuIy.svg" alt="Logo" />
        </a>
      </article>
      <article className="mx-auto max-w-screen-xl text-center" >
        <p className="my-6 text-center ">
          Aplicacion Privada para el Manejo de Choferes <br /> Y Camiones de Carga
          Pesada en Latinoamerica.
        </p>
        <ul className="flex flex-wrap justify-center items-center mb-6  ">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Conocenos
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Planes de Servicios
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Contactos
            </a>
          </li>
        </ul>
        <span className="text-sm  sm:text-center ">
          © 2024-2030{" "}
          <a href="#" className="hover:underline">
            TruckBI™
          </a>
          . All Rights Reserved.
        </span>
      </article>
    </section>
  );
}
