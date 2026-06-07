import { useState } from 'react';
import { useCart } from '../context/CartContext';

function Checkout() {
  const [isSuccess, setIsSuccess] = useState(false);

  const [errors, setErrors] = useState({}); //Skapar state för felmeddelande

  const { roundedPrice } = useCart(); //visar kundvagnens totalpris

  const [formData, setFormData] = useState({
    //Skapar ett samlat state för hela kunden.

    name: '',
    age: '',
    city: '',
    mail: '',
  });

  const handleChange = (e) => {
    //smart function som uppdaterar state när kunden skriver
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    //hanterar när kunden klickar på slutför köp
    e.preventDefault(); //Stoppar sidan från att laddas om

    setErrors({}); //nollställer eventuella gamla fel

    //validering: form
    if (!formData.name || !formData.city || !formData.mail) {
      alert('Fyll i alla obligatoriska fält');
      return;
    }

    const customerAge = Number(formData.age);

    if (!formData.age || customerAge < 18) {
      setErrors((prev) => ({
        ...prev,
        age: 'Du måste vara minst 18 år för att handla',
      }));
      return;
    }
    console.log('beställningen är skickad', formData);

    localStorage.setItem('checkout_user', JSON.stringify(formData));
    setIsSuccess(true);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md border mt-10">
      <h2 className="text-xl font-bold mb-4 text-slate-800">Dina Uppgifter</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* INPUT FÖR NAMN */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold text-slate-600">Namn</label>
          <input
            type="text"
            name="name" // Måste matcha exakt med namnet i ditt state!
            value={formData.name}
            onChange={handleChange}
            className="border border-slate-200 p-2 rounded-lg focus:outline-emerald-500"
            placeholder="Name"
          />
        </div>

        {/* INPUT FÖR ÅLDER */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold text-slate-600">Ålder</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="border border-slate-200 p-2 rounded-lg focus:outline-emerald-500"
            placeholder="age"
          />

          {errors.age && (
            <span className="text-xs font-semibold text-red-500 mt-0.5">
              {errors.age}
            </span>
          )}
        </div>

        {/* INPUT FÖR ORT */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold text-slate-600">Ort</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="border border-slate-200 p-2 rounded-lg focus:outline-emerald-500"
            placeholder="city"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold text-slate-600">Mail</label>
          <input
            type="text"
            name="mail"
            value={formData.mail}
            onChange={handleChange}
            className="border border-slate-200 p-2 rounded-lg focus:outline-emerald-500"
            placeholder="mail"
          />
        </div>

        <div>
          <h2 className="font-bold"> Att betala {roundedPrice} kr</h2>
        </div>

        <button
          type="submit"
          className="mt-2 bg-slate-800 hover:bg-slate-900 text-white font-bold p-3 rounded-lg transition-colors shadow-sm">
          Slutför Köp
        </button>
      </form>

      <SuccesModal isOpen={isSuccess} customerName={formData.name} />
    </div>
  );
}

function SuccesModal({ isOpen, customerName }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white p-8 rounded-2xl max-w-md w-full text-center shadow-2xl border border-slate-100 flex flex-col items-center gap-4">
        <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-3xl text-emerald-500 shadow-inner">
          🎉
        </div>
        <h3 className="text-2xl font-black text-slate-800 tracking-tight mt-2">
          Tack för ditt köp,{' '}
          <span className="text-emerald-600">{customerName}</span>!
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          Din beställning är mottagen och vi har skickat en orderbekräftelse.
          Tack för att du handlar hos Dagmans Webbshop!
        </p>
        <button
          onClick={() => (window.location.href = '/products')}
          className="mt-2 w-full bg-slate-800 hover:bg-slate-950 text-white font-bold py-3 rounded-xl transition-all shadow-md active:scale-95">
          Fortsätt shoppa
        </button>
      </div>
    </div>
  );
}

export default Checkout;
