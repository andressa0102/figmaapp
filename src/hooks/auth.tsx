import { useContext } from "react";
import { AuthContext, IAuthContexData } from "../context/auth";

export function useAuth(): IAuthContexData {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    return context;
}