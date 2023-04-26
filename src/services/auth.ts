import { AuthDTO } from "@/pages/admin/signin"

export const loginService = async(auth:AuthDTO) => {
    const res = await fetch("http://localhost:3000/api/signin", {
        method: "POST",
        body: JSON.stringify(auth)
    });

    const user = await res.json();
    return user;
}