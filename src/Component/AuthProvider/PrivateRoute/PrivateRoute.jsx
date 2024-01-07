import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { Navigate } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";
import { useUser } from "@clerk/clerk-react";

const PrivateRoute = ({ children }) => {
  // const { user, loading } = useContext(AuthContext);
  const { user, isLoaded } = useUser();
  if (!isLoaded) {
    return (
      <div className="h-screen w-screen mx-auto flex justify-center items-center">
        <Spinner className="h-16 w-16  text-gray-900/50 dark:text-white" />
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
