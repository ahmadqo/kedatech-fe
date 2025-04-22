import heroImg from "../../assets/images/undraw_metrics.svg";

export default function Hero() {
  return (
    <section className="h-screen pt-32 pb-20 bg-gradient-to-br from-blue-100 to-white flex items-center justify-center text-center">
      {/* Background Cloud */}
      <div className="hidden md:block absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full opacity-50 blur-3xl"></div>
      <div className="hidden md:block absolute top-[-50px] right-[0px] w-96 h-96 bg-blue-300 rounded-full opacity-40 blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Sistem ERP untuk UMKM Modern
          </h1>
          <p className="mb-6 text-lg">
            Catat barang keluar masuk, keuntungan harian, hingga analisis
            penjualan secara otomatis.
          </p>
          <a
            href="#pricing"
            className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100"
          >
            Lihat Paket
          </a>
        </div>
        <div className="w-full md:w-1/2">
          <img src={heroImg} alt="ERP Illustration" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
}
