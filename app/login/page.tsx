"use client";
// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { signIn, useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";

// const Login = () => {
//   const router = useRouter();
//   const [error, setError] = useState("");

//   const { data: session, status: sessionStatus } = useSession();

//   useEffect(() => {
//     if (sessionStatus === "authenticated") {
//       if (session?.user.role === "ADMIN") {
//         router.replace("/dashboard");
//       } else {
//         router.replace("/");
//       }
//     }
//   }, [sessionStatus, session, router]);

//   const isValidEmail = (email: string) => {
//     const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
//     return emailRegex.test(email);
//   };

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//     const email = e.target[0].value;
//     const password = e.target[1].value;

//     if (!isValidEmail(email)) {
//       setError("Email is invalid");
//       return;
//     }

//     if (!password || password.length < 8) {
//       setError("Password is invalid");
//       return;
//     }

//     const res = await signIn("credentials", {
//       redirect: false,
//       email,
//       password,
//     });

//     if (res?.error) {
//       setError("Invalid email or password");

//       if (session?.user.role === "ADMIN") {
//         router.replace("/dashboard");
//       } else {
//         router.replace("/");
//       }
//     } else {
//       setError("");
//     }
//   };

//   if (sessionStatus === "loading") {
//     return <h1>Loading...</h1>;
//   }

//   return (
//     sessionStatus !== "authenticated" && (
//       <div className="flex min-h-screen flex-col items-center justify-between p-24">
//         <div className="bg-[#212121] p-8 rounded shadow-md w-96">
//           <h1 className="text-4xl text-center font-semibold mb-8">Login</h1>
//           <form onSubmit={handleSubmit}>
//             <input
//               type="text"
//               className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
//               placeholder="Email"
//               required
//             />
//             <input
//               type="password"
//               className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
//               placeholder="Password"
//               required
//             />
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
//             >
//               {" "}
//               Sign In
//             </button>
//             <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
//           </form>

//           <div className="text-center text-gray-500 mt-4">- OR -</div>
//           <Link
//             className="block text-center text-blue-500 hover:underline mt-2"
//             href="/register"
//           >
//             Register Here
//           </Link>
//         </div>
//       </div>
//     )
//   );
// };

// export default Login;

import { signIn, signOut } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Input from "../components/Input";
import Link from "next/link";

export default function LoginForm() {
  useEffect(() => {
    signOut({
      redirect: false,
    });
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const login = async () => {
    setLoading(true);

    const login = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (login?.ok) {
      toast.success("Correct login");
      window.location.assign("/");
    } else if (login?.error) {
      toast.error(login?.error);
    }

    setLoading(false);
  };

  return (
    <>
      <div className=" container w-full m-auto  h-[109px]">
        <Link
          href="/"
          className="flex flex-col items-center  bg-red-800 p-1 ml-1"
        >
          <div className="text-white font-black text-[50px]">telc</div>
          <div className="text-white  text-[12px]">LNGUAGE TESTS</div>
        </Link>
      </div>
      <section className="bg-gray-50 ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl ">
                Sign in to your account
              </h1>
              <div className="space-y-4 md:space-y-6">
                <Input
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                />
                <Input
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                  type="password"
                />
                <div
                  onClick={login}
                  className="px-10 py-3 text-center bg-neutral-900 rounded-full text-white disabled:opacity-70 cursor-pointer"
                >
                  {loading ? (
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="flex-shrink-0 m-auto animate-spin w-6 h-6"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="1 4 1 10 7 10"></polyline>
                      <polyline points="23 20 23 14 17 14"></polyline>
                      <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
                    </svg>
                  ) : (
                    // "Login..."
                    "Login"
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
