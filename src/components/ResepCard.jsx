export default function ResepCard({ resep }) {

    const clickRedirect = (resep) => () => {
        window.location.href = `/detail/${resep.id}`;
    }

    return (
        <div className="bg-white rounded-lg shadow-md shadow-gray-300 p-4 justify-center" onClick={clickRedirect(resep)}>
            <div className="resep-image-container flex justify-center">
                <img
                    src={resep.image}
                    alt={resep.name}
                    className="resep-image w-40 h-40 justify-center"
                />
            </div>
          <h3 className="resep-title text-lg font-bold">{resep.name}</h3>
          <p className="resep-description text-sm">{resep.difficulty}</p>
        </div>
    );
}