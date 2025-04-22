import TierCard from "../ui/TierCard";
const tierPackages = [
  {
    tier: "Basic",
    price: "Rp 50.000 / bulan",
    originalPrice: "Rp 70.000 / bulan",
    features: [
      "Mencatat barang masuk",
      "Mencatat barang keluar",
      "Mencatat hasil keuntungan",
    ],
    delay: 0,
    popular: false,
  },
  {
    tier: "Business",
    price: "Rp 100.000 / bulan",
    originalPrice: "Rp 130.000 / bulan",
    features: [
      "Mencatat barang masuk dan keluar",
      "Mencatat Keuntungan",
      "Dapat menganalisa hasil penjualan dengan CHART",
      "Support 7x24 Jam",
    ],
    delay: 100,
    popular: true,
  },
  {
    tier: "Entrepreneur",
    price: "Rp 150.000 / bulan",
    originalPrice: "Rp 200.000 / bulan",
    features: [
      "Mencatat barang masuk dan keluar",
      "Mencatat Keuntungan",
      "Dapat menganalisa hasil penjualan dengan CHART",
      "Support 7x24 Jam",
      "Export data ke Excel",
      "AI Prediksi penghasilan",
    ],
    delay: 200,
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="md:h-screen py-20 bg-gradient-to-b from-white to-indigo-50"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2
          className="text-3xl font-bold text-gray-800 mb-4"
          data-aos="fade-up"
        >
          Temukan Paket Terbaik untuk Kebutuhan Anda
        </h2>
        <p
          className="text-lg text-gray-600 mb-12 max-w-33xl"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          Pilih paket yang sesuai dengan kebutuhan bisnis Anda.
          <br /> Kami menyediakan berbagai fitur untuk membantu Anda mengelola
          bisnis dengan lebih mudah dan efisien.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {tierPackages.map((pkg) => (
            <TierCard key={pkg.tier} data={pkg} />
          ))}
        </div>
        <p
          className="text-md text-gray-700 mt-12 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Dengan aplikasi ERP ini, Anda dapat mengelola bisnis Anda dengan lebih
          terorganisir, efisien, dan modern. Jadikan pengelolaan bisnis lebih
          mudah bersama kami!
        </p>
      </div>
    </section>
  );
}
