import aboutImg from "../../assets/images/undraw_online-banking.svg";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img src={aboutImg} alt="Tentang Kami" className="w-full h-auto" />
        </div>
        <div className="w-full md:w-1/2 md:pl-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Tentang GudangKU
          </h2>
          <p className="text-gray-600">
            GudangKU adalah sistem pencatatan barang dan keuntungan yang
            dirancang khusus untuk UMKM. Dengan fitur-fitur modern seperti
            analisa penjualan, ekspor data, dan AI prediksi, Anda dapat
            mengelola bisnis lebih efektif dan efisien.
          </p>
        </div>
      </div>
    </section>
  );
}
