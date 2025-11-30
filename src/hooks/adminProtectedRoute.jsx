"use client";

import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AuthContext from "@/context/authcontext/Authcontext";
import api from "@/lib/axios"; 

const AdminProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();
  const [role, setRole] = useState(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        if (!loading && user) {
          const res = await api.get(`/users/${user.uid}`);
          setRole(res.data.role);

          if (res.data.role !== "admin") {
            router.push("/");
          }
        }

        if (!loading && !user) {
          router.push("/auth/login");
        }
      } catch (error) {
        console.error("Error checking admin role:", error);
        router.push("/");
      } finally {
        setChecking(false);
      }
    };

    checkAdmin();
  }, [loading, user, router]);

  if (loading || checking || !role) {
    return (
      <div className="w-full h-[70vh] flex justify-center items-center">
        <p className="text-xl font-semibold">Checking Admin Access...</p>
      </div>
    );
  }

  return children;
};

export default AdminProtectedRoute;
