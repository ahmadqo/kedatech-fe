export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-indigo-50 to-white"
    >
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2
          className="text-4xl font-extrabold text-gray-800 mb-8"
          data-aos="fade-up"
        >
          Hubungi Kami
        </h2>
        <p
          className="text-lg text-gray-600 mb-12"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          Ada pertanyaan atau butuh bantuan? Kirimkan pesan Anda, dan kami akan
          segera menghubungi Anda.
        </p>
        <form
          className="space-y-6 bg-white shadow-lg rounded-xl p-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Nama Lengkap"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-3 right-3 h-6 w-6 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div className="relative">
            <input
              type="email"
              placeholder="Alamat Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-3 right-3 h-6 w-6 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 12H8m0 0l4-4m-4 4l4 4"
              />
            </svg>
          </div>
          <div className="relative">
            <textarea
              rows={4}
              placeholder="Tulis pesan Anda di sini..."
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-3 right-3 h-6 w-6 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16h6"
              />
            </svg>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Kirim Pesan
          </button>
        </form>
      </div>
    </section>
  );
}
