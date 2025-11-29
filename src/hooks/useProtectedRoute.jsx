"use client";

import { useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import AuthContext from "@/context/AuthContext";

export default function useProtectedRoute(redirectTo = "/auth/login") {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push(redirectTo);
    }
  }, [loading, user, router, redirectTo]);

  return { user, loading };
}
