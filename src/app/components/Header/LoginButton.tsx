"use client";

import { useState } from "react";
import Login from "../Login";

export default function LoginButton() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="bg-amazon-yellow p-1 rounded-lg w-full mt-4"
      >
        Sign in
      </button>

      {showModal && <Login onClose={() => setShowModal(false)} />}
    </>
  );
}
