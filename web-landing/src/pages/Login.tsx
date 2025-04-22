import LoginImg from "../assets/images/undraw_account_aydp.svg";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left: Image */}
      <div className="md:w-1/2 hidden md:flex flex-col items-center gap-12 justify-center bg-indigo-50">
        <a href="/" className="text-2xl font-bold text-gray-800">
          Gudang<span className="text-blue-600">KU</span>
        </a>
        <img src={LoginImg} alt="Login Illustration" className="w-3/4 h-auto" />
      </div>

      {/* Right: Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center mb-8 block md:hidden">
            <a href="/" className="text-2xl font-bold text-gray-800">
              Gudang<span className="text-blue-600">KU</span>
            </a>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Login ke Akun Anda
          </h2>

          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="example@email.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="********"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Login
            </button>
          </form>

          <p className="text-center text-sm text-gray-600">
            Belum punya akun?{" "}
            <a href="#" className="text-indigo-600 hover:underline">
              Daftar di sini
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
