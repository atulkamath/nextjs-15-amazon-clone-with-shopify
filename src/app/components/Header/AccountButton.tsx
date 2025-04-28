"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";

import type { Session } from "next-auth";
import Login from "../Login";

export default function AccountButton({
  session,
}: {
  session: Session | null;
}) {
  const [showModal, setShowModal] = useState(false);

  const showModalPopup = () => {
    setShowModal(true);
  };

  return (
    <>
      {showModal && <Login onClose={() => setShowModal(false)} />}
      <button className="flex border border-transparent hover:border-white p-1 mx-4">
        <div className="text-sm text-start">
          {session ? (
            <div className="flex flex-col">
              <span className="font-bold whitespace-nowrap">
                Hi, {session.user?.name}
              </span>
              <span onClick={() => signOut()}> Logout?</span>
            </div>
          ) : (
            <div onClick={showModalPopup}>
              <span>Hello Sign in,</span>
              <br />
              <span className="font-bold whitespace-nowrap">
                Account & Lists
              </span>
            </div>
          )}
        </div>
      </button>
    </>
  );
}
