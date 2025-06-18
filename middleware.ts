import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const { pathname } = req.nextUrl;

  // Allow access to public paths
  if (
    pathname.startsWith("/sign-in") ||
    pathname === "/"
  ) {
    return NextResponse.next();
  }

  // Redirect if no token (not authenticated)
  if (!token) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  // Role-based route restrictions
  if (pathname.startsWith("/admin") && token.role !== "admin") {
    return NextResponse.redirect(new URL("/admindashboard", req.url));
  }

  if (pathname.startsWith("") && token.role !== "user") {
    return NextResponse.redirect(new URL(`/celebrity/${token.slug}`, req.url));
  }

  return NextResponse.next();
}

// Configure the matcher for routes that require this middleware
export const config = {
  matcher: ["/admin/:path*", "/dashboard/:path*"],
};
