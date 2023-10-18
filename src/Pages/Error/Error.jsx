import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="space-y-12 h-screen w-screen flex flex-col justify-center items-center">
      <h1 className="text-6xl dark:text-white">404</h1>
      <p className="text-3xl dark:text-white">Page Not Found...</p>
      <button
        className="btn p-3 rounded-md bg-black text-white dark:bg-white dark:text-black"
        onClick={() => {
          navigate("/");
        }}
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default Error;
