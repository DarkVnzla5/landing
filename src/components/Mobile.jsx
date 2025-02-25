export default function Mobile() {
  return (
    <section className="max-lg:hidden flex flex-col">
      <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-xl h-[400px] w-[300px] shadow-xl right-auto mr-auto top-20">
        <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
        <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
        <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
        <div className="rounded-xl overflow-hidden w-[272px] h-[372px] bg-tertiary ">
          <p className="w-[272px] h-[572px] px-2 py-4 text-center">
            Img de la app version Mobile
          </p>
        </div>
      </div>
    </section>
  );
}
