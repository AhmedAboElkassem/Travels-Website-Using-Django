import { NextResponse } from "next/server";
export function middleware(req) {
  const token = req.cookies.get("Token");
  if (
    token &&
    (req.nextUrl.pathname === "/login" ||
      req.nextUrl.pathname === "/Register" ||
      req.nextUrl.pathname === "/")
  ) {
    return NextResponse.redirect(new URL("/Home", req.url));
  }

  if (
    !token &&
    ["/Home", "/flights", "/Booking", "/hotel", "/Payment"].includes(
      req.nextUrl.pathname
    )
  ) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}
export const config = {
  matcher: [
    "/Home",
    "/flights",
    "/Booking",
    "/hotel",
    "/login",
    "/Register",
    "/",
    "/Payment",
  ],
};
