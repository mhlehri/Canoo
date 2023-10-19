import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Component/AuthProvider/AuthProvider";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { toast } from "react-toastify";

export function SignIn() {
  const { logIn, googleLogin, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    console.log(user);
    logIn(email, password)
      .then(() => {
        toast.success("Successfully Registered!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        navigate("/");
      })
      .catch((err) =>
        toast.error(`${err.message}`, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      );
  };
  return (
    <div className="mx-3">
      <div className="mx-auto max-w-lg my-20 px-6 py-5 dark:bg-blue-gray-100 rounded-lg">
        <Card color="transparent" shadow={false} className="text-black">
          <Typography variant="h4" color="blue-gray">
            Sign In
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Enter your details to Login.
          </Typography>
          <form onSubmit={handleSignIn} className="mt-8 mb-2 max-w-screen-lg ">
            <div className="mb-4 flex flex-col gap-6">
              <Input type="email" size="lg" name="email" label="Email" />
              <Input
                type="password"
                size="lg"
                name="password"
                label="Password"
              />
            </div>
            <Button type="submit" className="mt-6" fullWidth>
              Login
            </Button>
            <Typography className="mt-4 text-center font-normal">
              Don't have an account?{" "}
              <Link
                to="/signUp"
                className="underline font-medium text-gray-900"
              >
                Sign Up
              </Link>
            </Typography>
          </form>
          <div className="w-full mx-auto text-center">
            <hr className="border-t-2 py-2" />

            <Button
              onClick={() =>
                googleLogin()
                  .then(() => {
                    navigate("/");
                    toast.success(`Successfully Logged In!`, {
                      position: "top-center",
                      autoClose: 3000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "colored",
                    });
                  })
                  .catch()
              }
              className="bg-green-800   mb-2"
              size="sm"
            >
              <span>Login with Google</span>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
