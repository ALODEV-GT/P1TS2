import { useEffect, useState } from "react";
import { Plus, X } from "lucide-react";

interface User {
    id: number;
    username: string;
    rol: { name: string };
}

interface Role {
    id: number;
    name: string;
}

function Permissions() {
    const [users, setUsers] = useState<User[]>([]);
    const [roles, setRoles] = useState<Role[]>([]);
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [selectedRole, setSelectedRole] = useState<string>("");
    const [showForm, setShowForm] = useState<boolean>(false);

    useEffect(() => {
        fetch("http://localhost:3000/api/users")
            .then(response => response.json())
            .then(data => setUsers(data));

        fetch("http://localhost:3000/api/roles")
            .then(response => response.json())
            .then(data => setRoles(data));
    }, []);

    const handleCreateUser = () => {
        if (!username || !password || !selectedRole) return;

        fetch("http://localhost:3000/api/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password, id_rol: Number(selectedRole) })
        })
            .then(response => response.json())
            .then(newUser => {
                setUsers([...users, newUser]);
                setUsername("");
                setPassword("");
                setSelectedRole("");
                setShowForm(false);
            });
    };

    return (
        <div className="flex flex-row bg-gray-100 w-full">
            <div className="p-10 pt-5 min-h-screen w-full">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Usuarios</h2>
                <button onClick={() => setShowForm(true)} className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 mb-2 rounded w-max flex flex-row gap-2">
                    <Plus /> Crear nuevo
                </button>
                <div className="rounded-lg shadow-lg h-[calc(100vh_-_160px)] overflow-auto">
                    <table className="min-w-full border border-gray-200">
                        <thead>
                            <tr className="bg-gray-900 text-white">
                                <th className="border px-6 py-3 text-left">ID</th>
                                <th className="border px-6 py-3 text-left">Nombre de usuario</th>
                                <th className="border px-6 py-3 text-left">Rol</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user.id} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                                    <td className="border px-6 py-3 border-gray-200">{user.id}</td>
                                    <td className="border px-6 py-3 border-gray-200">{user.username}</td>
                                    <td className="border px-6 py-3 border-gray-200">{user.rol.name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {showForm && (
                <div className="w-[400px] pt-5 pr-10 bg-white shadow-lg p-5">
                    <div className="flex flex-row justify-between items-center">
                        <span className="text-2xl font-bold">Nuevo Usuario</span>
                        <X className="cursor-pointer" onClick={() => setShowForm(false)} />
                    </div>
                    <div className="mt-5 flex flex-col">
                        <label className="font-bold">Nombre de usuario: </label>
                        <input className="border rounded-sm p-2" value={username} onChange={e => setUsername(e.target.value)}></input>

                        <label className="font-bold mt-2">Contraseña: </label>
                        <input type="password" className="border rounded-sm p-2" value={password} onChange={e => setPassword(e.target.value)}></input>

                        <label className="font-bold mt-2">Rol: </label>
                        <select className="border rounded-sm p-2" value={selectedRole} onChange={e => setSelectedRole(e.target.value)}>
                            <option value="">Seleccione un rol</option>
                            {roles.map(role => (
                                <option key={role.id} value={role.id}>{role.name}</option>
                            ))}
                        </select>

                        <button onClick={handleCreateUser} className="cursor-pointer bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded transition mt-2">Crear</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Permissions;
