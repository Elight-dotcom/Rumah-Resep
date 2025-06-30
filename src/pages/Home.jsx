import Resep from "../components/ResepCard";
import { getAllRecipes, searchRecipes } from "../services/api";
import { useEffect, useState } from "react";

function Home() {
    const [searchQuery, setSearchQuery] = useState('');
    const [reseps, setResep] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadData = async () => {
            try{
                const resepAll = await getAllRecipes();
                setResep(resepAll);
            } catch (error) {
                console.log(error);
                setError("Gagal memuat resep...");
            } finally {
                setLoading(false);
            }
        }

        loadData();
    }, [])

    const handleSearch = async (e) => {
        e.preventDefault();
        if(!searchQuery.trim()) return;
        if(loading) return;

        setLoading(true);

        try{
            const searhResult = await searchRecipes(searchQuery);
            setResep(searhResult);
            setError(null);
        } catch{
            console.log(error);
            setError("Gagal memuat resep...");
        } finally {
            setLoading(false);
        }

    }

  return (
    <div>
      {/* Header */}
      <div className="header text-center w-full mx-auto mt-32">
        <h1 className="header-title text-4xl font-bold text-blue-600">
          Rumah Resep
        </h1>
        <p className="header-subtitle text-lg text-blue-500">
          Tempat untuk mencari resep masakan
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mt-10">
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Cari Resep..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:border-blue-500"
          />
          <button className="search-button bg-blue-500 text-white rounded-r-lg px-4 py-2 hover:bg-blue-600 hover:scale-105 transition ease-in-out duration-300 cursor-pointer" type="submit">
            Cari
          </button>
        </form>
      </div>

      {/* Error */}
      {error && <div className="error text-red-500 mt-4">{error}</div>}

      {/* List Resep & Loading */}
      {loading ? (<div className="loading text-xl fonst-bold text-blue-600">Loading...</div> )
        : 
      (<div className="resep-grid grid grid-cols-3 gap-4 mt-16">
        {reseps.map((resep) => (
            resep.name.toLowerCase().startsWith(searchQuery.toLowerCase()) && <Resep resep={resep} />
        ))}
      </div>)}
      
    </div>
  );
}

export default Home;
