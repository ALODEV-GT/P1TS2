import { Play } from 'lucide-react';
import Intersection from '../../graphics/Intersection';
import './Monitor.css';

function Monitor() {
    const intersections = [
        { id: 1, nombre: "Brayan Alonzo" },
        { id: 2, nombre: "Brayan Alonzo" },
        { id: 3, nombre: "Brayan Alonzo" },
        { id: 4, nombre: "Brayan Alonzo" },
        { id: 5, nombre: "Brayan Alonzo" },
    ];

    return (
        <div className='bg-gray-100 flex flex-col w-full overflow-auto h-[100vh]'>
            <div className='p-10 pt-5 flex flex-row'>
                <div className='w-[730px]'>
                    <h1 className='text-3xl font-bold'>Nombre interseccion</h1>
                    <div className='flex gap-2 mb-2'>
                        <button className="cursor-pointer bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded transition">Cargar archivo</button>
                        <button className="cursor-pointer bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded transition">Random </button>
                        <button className="cursor-pointer bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition"><Play></Play></button>
                    </div>
                    <div className='bg-gray-300 h-fit w-fit border'>
                        <Intersection />
                    </div>
                </div>
                <div className='w-full px-5'>
                    <div className="p-6 mt-[84px] max-w-3xl mx-auto space-y-6 bg-white shadow-lg rounded-lg">
                        <h1 className='text-3xl font-bold'>Datos</h1>
                        <h2 className="text-xl font-bold">Seleccionar Semáforo</h2>
                        <select className="w-full p-2 border rounded">
                            <option>Semáforo A</option>
                            <option>Semáforo B</option>
                            <option>Semáforo C</option>
                            <option>Semáforo D</option>
                        </select>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block font-semibold">Tiempo luz roja (s)</label>
                                <input type="number" className="w-full p-2 border rounded" />
                            </div>
                            <div>
                                <label className="block font-semibold">Tiempo luz amarilla (s)</label>
                                <input type="number" className="w-full p-2 border rounded" />
                            </div>
                            <div>
                                <label className="block font-semibold">Tiempo luz verde (s)</label>
                                <input type="number" className="w-full p-2 border rounded" />
                            </div>
                        </div>

                        <h2 className="text-xl font-bold">Historial</h2>
                        <table className="w-full border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border p-2"></th>
                                    <th className="border p-2">Semáforo A</th>
                                    <th className="border p-2">Semáforo B</th>
                                    <th className="border p-2">Semáforo C</th>
                                    <th className="border p-2">Semáforo D</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border p-2 font-semibold bg-gray-100">Vehículos procesados</td>
                                    <td className="border p-2">--</td>
                                    <td className="border p-2">--</td>
                                    <td className="border p-2">--</td>
                                    <td className="border p-2">--</td>
                                </tr>
                                <tr>
                                    <td className="border p-2 font-semibold bg-gray-100">Tiempo promedio de espera</td>
                                    <td className="border p-2">--</td>
                                    <td className="border p-2">--</td>
                                    <td className="border p-2">--</td>
                                    <td className="border p-2">--</td>
                                </tr>
                            </tbody>
                        </table>

                        <div>
                            <label className="block font-semibold">Comentario de la iteración</label>
                            <textarea className="w-full p-2 border rounded h-24"></textarea>
                        </div>

                        <div className="space-y-2">
                            <p><strong>Tipo de simulación:</strong> Random / Archivo</p>
                            <p><strong>Usuario:</strong> Nombre del usuario</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-10 pt-5">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Vehiculos procesados</h2>
                <div className="rounded-lg shadow-lg">
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
        </div>
    );
}

export default Monitor;
