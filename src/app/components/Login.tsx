"use client";
import { signIn } from "next-auth/react";
import AmazonLogo from "./AmazonLogo";
import { X } from "lucide-react";

export default function Login({ onClose }: { onClose: () => void }) {
  return (
    <div className="inset-0 fixed flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-12 rounded shadow-lg text-black flex flex-col lg:w-1/4 items-center relative">
        <button
          className="absolute top-4 right-4 text-gray-500"
          onClick={onClose}
        >
          <X />
        </button>
        <AmazonLogo className="mb-4" />
        <input
          type="text"
          placeholder="Email"
          className="border p-2 mb-4 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 mb-4 w-full"
        />
        <button
          className="bg-amazon-yellow p-2 rounded-lg mt-4 lg:mt-0 font-semibold"
          onClick={() => signIn("github")}
        >
          Sign in with GitHub
        </button>
      </div>
    </div>
  );
}
