import Dashboard from "../../components/dashboard";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function HomePage() {
  
  return (
    <ProtectedRoute>
    <Dashboard />;
    </ProtectedRoute>
  )
  
}