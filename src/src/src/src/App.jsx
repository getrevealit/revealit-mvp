import React, { useState } from "react";

const dummyCategories = {
  "setting spray": [
    {
      name: "Urban Decay All Nighter",
      price: 349,
      whymeScore: 7.8,
      image: "https://images.ulta.com/is/image/Ulta/2224696"
    },
    {
      name: "NYX Matte Finish",
      price: 129,
      whymeScore: 8.5,
      image: "https://images.ulta.com/is/image/Ulta/2266339"
    },
    {
      name: "e.l.f. Stay All Night",
      price: 99,
      whymeScore: 8.7,
      image: "https://images.ulta.com/is/image/Ulta/2577553"
    }
  ],
  "foundation": [
    {
      name: "Estée Lauder Double Wear",
      price: 495,
      whymeScore: 8.4,
      image: "https://images.ulta.com/is/image/Ulta/2218718"
    },
    {
      name: "L'Oréal Infallible",
      price: 159,
      whymeScore: 8.6,
      image: "https://images.ulta.com/is/image/Ulta/2309780"
    },
    {
      name: "Maybelline Super Stay",
      price: 149,
      whymeScore: 8.3,
      image: "https://images.ulta.com/is/image/Ulta/2509249"
    }
  ]
};

export default function RevealitApp() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const key = query.toLowerCase().trim();
    const categoryResults = dummyCategories[key];
    if (categoryResults) {
      const sorted = categoryResults.sort((a, b) => b.whymeScore - a.whymeScore);
      setResults(sorted);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="min-h-screen bg-[#fdfcf9] p-6 flex flex-col items-center font-sans">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-serif tracking-tight mb-2">Revealit</h1>
        <p className="text-lg text-neutral-600">Vi avslöjar vad som faktiskt funkar – inte vad som säljer bäst.</p>
      </header>

      <div className="w-full max-w-md flex gap-2 mb-8">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Sök produkt eller kategori (ex. 'setting spray')"
          className="flex-1 p-3 border border-gray-300 rounded-2xl shadow-sm"
        />
        <button
          onClick={handleSearch}
          className="bg-black text-white px-5 rounded-2xl font-medium"
        >
          Sök
        </button>
      </div>

      {results.length > 0 ? (
        <div className="w-full max-w-md space-y-6">
          {results.map((item, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-md p-5">
              <img src={item.image} alt={item.name} className="rounded-xl w-full mb-3" />
              <h3 className="text-lg font-medium mb-1">{item.name}</h3>
              <p className="text-sm text-neutral-600 mb-1">Pris: {item.price} kr</p>
              <p className="text-sm text-neutral-600">Whyme Score: {item.whymeScore}</p>
            </div>
          ))}
        </div>
      ) : query ? (
        <p className="text-neutral-500 mt-10">Inga resultat hittades för "{query}"</p>
      ) : null}

      <div className="mt-20 text-center">
        <p className="mb-2 text-sm text-neutral-500">Vill du få early access till riktiga appen?</p>
        <a
          href="https://forms.gle/YOURFORMURL"
          className="inline-block bg-black text-white px-6 py-2 rounded-xl font-medium"
          target="_blank"
        >
          Join waitlist
        </a>
      </div>
    </div>
  );
}
