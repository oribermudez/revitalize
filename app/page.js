"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import { Spinner, Alert } from "@material-tailwind/react";

const Login = () => {
  const { user, error, isLoading } = useUser();
  const router = useRouter();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  // old button
  const handleClick = () => {
    router.push("/dashboard");
  };

  // new auth button
  const handleAuthClick = () => {
    router.push("/api/auth/login");
  };

  // TODO: make fancier loading/error
  if (isLoading)
    return (
      <div>
        <Spinner className="h-12 w-12" color="teal" />
      </div>
    );
  if (error)
    return (
      <div>
        <Alert color="red">Error: {error.message}</Alert>
      </div>
    );

  if (user) {
    // if user auth'd with a user made account, create email field using name
    if (!user.email) {
      user.email = user.name;
    }

    if (user.therapist) {
      const normalizeTherapist = () => {
        return {
          name: user.name,
          email: user.email,
          phone: "",
          address: {
            street: "",
            city: "",
            province: "",
            postalCode: "",
          },
          sin: "",
        };
      };

      const createTherapist = async (therapist) => {
        const response = await fetch("/api/therapists", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(therapist),
        });
        if (!response.ok) {
          console.error("Failed to store therapist data:", response.statusText);
        }
      };

      const findTherapist = async () => {
        const response = await fetch(`/api/therapists?email=${user.email}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.status === 200) {
          const therapistData = await response.json();
          if (therapistData) {
            user._id = therapistData._id;
          }
        } else if (response.status === 404) {
          createTherapist(normalizeTherapist());
        } else {
          console.error("Failed to fetch therapist data:", response.statusText);
        }
      };

      findTherapist();
      console.log(user);
      //router.push("/dashboard");
    } else {
      const normalizeClient = () => {
        return {
          name: user.name,
          email: user.email,
          phone: "",
          address: {
            street: "",
            city: "",
            province: "",
            postalCode: "",
          },
          insurance: {
            provider: "",
            policyNumber: "",
            expiryDate: "",
            isVerified: false,
          },
          payment: {
            brand: "",
            cardHolder: "",
            expiryDate: "",
            cardNumber: "",
            cardType: "",
            bank: "",
            isVerified: false,
          },
        };
      };

      const createClient = async (client) => {
        const response = await fetch("/api/clients", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(client),
        });
        if (!response.ok) {
          console.error("Failed to store user data:", response.statusText);
        }
      };

      const findClient = async () => {
        const response = await fetch(`/api/clients?email=${user.email}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.status === 200) {
          const clientData = await response.json();
          if (clientData) {
            user._id = clientData._id;
          }
        } else if (response.status === 404) {
          createClient(normalizeClient());
        } else {
          console.error("Failed to fetch client data:", response.statusText);
        }
      };

      findClient();
      console.log(user);
      router.push("/client/dashboard");
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-1">
      <div className="md:min-h-screen flex items-center bg-cover pr-20 bg-relax text-slate-900 justify-end">
        <div className="bg-white p-8 rounded-lg shadow-md w-[400px]">
          <div className="flex items-center justify-center mb-6">
            <Image src="/assets/logo.png" width={400} height={200} alt="" />
          </div>

          <h1 className="text-lg font-semibold mb-4">Sign In</h1>
          <p className="text-sm text-slate-300">
            Welcome back! Please enter your credentials.
          </p>
          <div className="relative mt-8">
            <label
              htmlFor="username"
              className={`absolute left-2 ${
                name ? "text-slate-600 text-xs" : "text-slate-500 text-md"
              } transition-all pointer-events-none`}
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              onChange={(e) => setName(e.target.value)}
              required
              className={`w-full px-2 py-1 border-b-2 text-slate-600 text-sm border-slate-300 focus:border-main bg-white focus:outline-none ${
                name && "pt-4"
              }`}
            />
          </div>
          <div className="relative my-6">
            <label
              htmlFor="password"
              className={`absolute left-2 ${
                password ? "text-slate-600 text-xs" : "text-slate-500 text-md"
              } transition-all pointer-events-none`}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              required
              className={`w-full px-2 py-1 border-b-2 text-slate-600 text-sm border-slate-300 focus:border-main bg-white focus:outline-none ${
                password && "pt-4"
              }`}
            />
          </div>

          <button
            className="mt-12 bg-main text-white font-semibold px-4 py-2 rounded hover:bg-[#77aba0] w-full flex gap-4 justify-center items-center"
            onClick={handleClick}
          >
            Sign In
          </button>
          <button
            className="mt-12 bg-main text-white font-semibold px-4 py-2 rounded hover:bg-[#77aba0] w-full flex gap-4 justify-center items-center"
            onClick={handleAuthClick}
          >
            Auth0
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
