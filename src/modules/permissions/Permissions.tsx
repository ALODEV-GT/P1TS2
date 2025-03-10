import { Plus, X } from "lucide-react";

function Permissions() {

    const intersections = [
        { id: 1, nombre: "Brayan Alonzo" },
        { id: 2, nombre: "Brayan Alonzo" },
        { id: 3, nombre: "Brayan Alonzo" },
        { id: 4, nombre: "Brayan Alonzo" },
        { id: 5, nombre: "Brayan Alonzo" },
    ];

    const permisos = [
        { id: 1, nombre: "Monitor" },
        { id: 2, nombre: "Supervisor" },
    ]


    return (
        <div className="flex flex-row bg-gray-100 w-full">
            <div className="p-10 pt-5  min-h-screen w-full">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Permisos</h2>
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
                                        <button className="cursor-pointer bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded transition">Ver</button>
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

                    <label className="font-bold mt-2">Permisos: </label>
                    {permisos.map((item) => (
                        <label key={item.id}>
                            <input type="checkbox" /> {item.nombre}
                        </label>
                    ))}

                    <button className="cursor-pointer bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded transition mt-2">Crear</button>
                    <button className="cursor-pointer bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded transition mt-2">Guardar</button>
                    <button className="cursor-pointer bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded transition mt-2">Eliminar</button>
                </div>
            </div>
        </div >
    )
}

export default Permissions 