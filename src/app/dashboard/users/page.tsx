import { getUsers } from "@/lib/users";
import { Suspense } from "react";

export default async function Users() {
    const users = await getUsers();
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div>
                <h1>Users</h1>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>{user.email}</li>
                    ))}
                </ul>
            </div>
        </Suspense>
    );
}
