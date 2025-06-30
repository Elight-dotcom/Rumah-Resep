import { useParams } from "react-router-dom"
import { getRecipeById } from "../services/api";
import { useState, useEffect } from "react";

export default function Detail() {
    const { id } = useParams();
    const [resep, setResep] = useState({});

    useEffect(() => {
        const loadData = async () => {
            const data = await getRecipeById(id);
            setResep(data);
        }

        loadData();
    }, [id]);

    return (
        <div className="detail-container mt-20 bg-white rounded-lg shadow-xl shadow-gray-300 p-4 mx-24">
            {/* Header */}
            <div className="relative flex items-center justify-center mb-4">
            <svg
                onClick={() => window.history.back()}
                className="w-[40px] h-[40px] absolute left-0 cursor-pointer hover:scale-110 transition ease-in-out duration-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
            >
                <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.3"
                d="M5 12h14M5 12l4-4m-4 4 4 4"
                />
            </svg>

            <h1 className="text-2xl font-bold">Detail Resep</h1>
            </div>
            <div className="resep-container mt-12 justify-center">
                <div className="resep-content flex flex-row items-center justify-center gap-10">
                    <div className="resep-image-container flex justify-center">
                        <img src={resep.image} alt={resep.name} className="resep-image shadow-lg rounded-2xl" width={250}/>
                    </div>
                    <div className="resep-description flex flex-col items-start text-start">
                        <h2 className="resep-title text-4xl font-bold mb-4"><span className="text-blue-500">{resep.name}</span></h2>
                        <p>⌛ Waktu Masak : {resep.cookTimeMinutes}</p>
                        <p>🍽️ Jumlah Porsi : {resep.servings}</p>
                        <p>🔥 Kalori Per Porsi : {resep.caloriesPerServing}</p>
                        <p>🚩 Kesulitan : {resep.difficulty === "Easy" ? "Mudah" : resep.difficulty === "Medium" ? "Sedang" : "Sulit"}</p>
                    </div>
                </div>
                {resep && (
                <div className="resep-partition flex flex-row mt-12">
                    <div className="w-1/3 mx-10">
                        <h3 className="mb-4 text-center font-bold text-blue-400 text-xl">Ingredients</h3>
                        <ul className="items-start text-start">
                            {resep?.ingredients?.map((ingredient, index) => (
                                <li className="mb-2 list-disc" key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-2/3">
                        <h3 className="mb-4 text-center font-bold text-blue-400 text-xl">Steps</h3>
                        <ol className="items-start text-start">
                            {resep?.instructions?.map((step, index) => (
                                <li className="mb-2 list-decimal" key={index}>{step}</li>
                            ))}
                        </ol>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}