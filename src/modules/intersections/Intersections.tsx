import { Plus, X } from "lucide-react";
import { Link } from "react-router-dom";

function Intersections() {
    const intersections = [
        { id: 1, nombre: "Intersección A" },
        { id: 2, nombre: "Intersección B" },
        { id: 3, nombre: "Intersección C" },
        { id: 4, nombre: "Intersección C" },
        { id: 5, nombre: "Intersección C" },
        { id: 6, nombre: "Intersección C" },
        { id: 7, nombre: "Intersección C" },
        { id: 1, nombre: "Intersección A" },
        { id: 2, nombre: "Intersección B" },
        { id: 3, nombre: "Intersección C" },
        { id: 4, nombre: "Intersección C" },
        { id: 5, nombre: "Intersección C" },
        { id: 6, nombre: "Intersección C" },
        { id: 7, nombre: "Intersección C" },
        { id: 1, nombre: "Intersección A" },
        { id: 2, nombre: "Intersección B" },
        { id: 3, nombre: "Intersección C" },
        { id: 4, nombre: "Intersección C" },
        { id: 5, nombre: "Intersección C" },
        { id: 6, nombre: "Intersección C" },
        { id: 7, nombre: "Intersección C" },
    ];

    return (
        <div className="flex flex-row bg-gray-100 w-full">
            <div className="p-10 pt-5  min-h-screen w-full">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Intersecciones</h2>
                <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 mb-2 rounded w-max flex flex-row gap-2">
                    <Plus />
                    Crear nuevo</button>
                <div className="rounded-lg shadow-lg h-[calc(100vh_-_160px)] overflow-auto">
                    <table className="min-w-full border border-gray-200 ">
                        <thead>
                            <tr className="bg-gray-900 text-white">
                                <th className="border px-6 py-3 text-left">ID</th>
                                <th className="border px-6 py-3 text-left">Nombre</th>
                                <th className="border px-6 py-3 text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {intersections.map((item, index) => (
                                <tr key={item.id} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                                    <td className="border px-6 py-3 border-gray-200">{item.id}</td>
                                    <td className="border px-6 py-3 border-gray-200">{item.nombre}</td>
                                    <td className="border px-6 py-3 border-gray-200 flex justify-center gap-3 ">
                                        <button className="cursor-pointer bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded transition">Ver Historial</button>

                                        <Link to={'/monitor'}>
                                            <button className="cursor-pointer bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded transition">Ver</button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="w-[400px] pt-5 pr-10">
                <div className="flex flex-row justify-between items-center">
                    <X className="cursor-pointer"></X>
                    <span className="text-2xl font-bold">Nueva interseccion</span>
                </div>
                <div className="mt-5 flex flex-col">
                    <label className="font-bold">Nombre: </label>
                    <input className="border rounded-sm" ></input>
                    <button className="cursor-pointer bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded transition mt-2">Crear</button>
                </div>
            </div>
        </div >
    );
}

export default Intersections;