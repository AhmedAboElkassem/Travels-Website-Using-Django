"use client";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
export default function ExitButton() {
  const router = useRouter();

  function exit() {
    Cookies.remove("Token");
    router.push("/login");
  }

  return (
    <button className="btn" onClick={exit}>
      <i className="fa-solid fa-right-from-bracket fs-3 exit"></i>
    </button>
  );
}
