type TierCardProps = {
  tier: string;
  price: string | number;
  originalPrice: string | number;
  features: string[];
  delay?: number;
  popular?: boolean;
};

export default function TierCard(props: { data: TierCardProps }) {
  const { tier, price, originalPrice, features, delay, popular } = props.data;
  return (
    <div
      className="p-6 bg-indigo-100 border-indigo-200 rounded-2xl shadow-md hover:shadow-lg transition-all tier-glass flex flex-col justify-between relative"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div>
        {popular && (
          <div className="absolute top-0 right-0 bg-yellow-400 text-white text-xs font-bold px-3 py-2 rounded-bl-xl rounded-tr-xl">
            Paling Populer
          </div>
        )}
        <h3 className="text-xl font-bold text-gray-800 mb-4">{tier}</h3>
        {originalPrice && (
          <p className="text-sm text-gray-500 line-through">{originalPrice}</p>
        )}
        <p className="text-2xl font-bold text-blue-600 mb-10">{price}</p>
        <ul className="text-gray-600 space-y-2 text-left">
          {features.map((feat, i) => (
            <li key={i}>✔ {feat}</li>
          ))}
        </ul>
      </div>
      <button className="w-full mt-6 bg-indigo-600 text-white font-bold text-base py-3 px-5 rounded-full hover:bg-indigo-700 cursor-pointer transition duration-300 ease-in-out">
        Pilih Paket
      </button>
    </div>
  );
}
