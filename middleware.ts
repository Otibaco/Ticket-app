import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const { pathname } = req.nextUrl;

  // ✅ Allow access to public paths
  // if (
  //   pathname.startsWith("/sign-in") ||
  //   pathname === "/"
  // ) {
  //   return NextResponse.next();
  // }

  // ❌ If not authenticated → redirect to login
  // if (!token) {
  //   return NextResponse.redirect(new URL("/sign-in", req.url));
  // }

  // ✅ Admin route protection
  // if (pathname.startsWith("/admin") && token.role !== "admin") {
  //   return NextResponse.redirect(new URL("/not-authorized", req.url)); // or a 403 page
  // }

  // ✅ User route protection
  // if (pathname.startsWith("/celebrity") && token.role !== "user") {
  //   return NextResponse.redirect(new URL("/not-authorized", req.url));
  // }

  return NextResponse.next();
}

// ✅ Apply middleware to specific paths
export const config = {
  matcher: ["/admin/:path*", "/celebrity/:path*"], // match user and admin areas
};
