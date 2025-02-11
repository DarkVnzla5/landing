export default function Hero() {
  return (
    <section className=" ">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold text-primary tracking-tight leading-none md:text-5xl xl:text-6xl">
            Problemas para Gestionar en su Empresa a sus Camiones y Choferes...
          </h1>
          <p className="max-w-2xl mb-6 font-bold text-2xl text-secondary lg:mb-8 md:text-lg lg:text-xl">
            Desde problemas para hacer llegar la mercancia a su destino hasta
            saber quien la transporta.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-xl font-medium text-center text-primary rounded-lg bg-secondary hover:bg-primary hover:text-secondary focus:ring-4 focus:ring-primary-300"
          >
            <p>Comenzar</p>
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-xl font-medium text-center text-primary border border-tertiary rounded-lg bg-secondary hover:bg-primary hover:text-secondary focus:ring-4 focus:ring-gray-100 "
          >
            <p>Financiación</p>
          </a>
        </div>
      </div>
    </section>
  );
}
