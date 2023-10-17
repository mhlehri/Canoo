import { Card, Input, Button, Typography } from "@material-tailwind/react";

export function SimpleRegistrationForm() {
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Sign In
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details to Login.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input type="email" size="lg" name="email" label="Email" />
          <Input type="password" size="lg" name="email" label="Password" />
        </div>
        <Button className="mt-6" fullWidth>
          Login
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Don't have an account?{" "}
          <a href="#" className="font-medium text-gray-900">
            Sign Up
          </a>
        </Typography>
      </form>
    </Card>
  );
}
