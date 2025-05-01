import { NextResponse } from "next/server";

import { auth, signOut } from "@/auth";
import { checkTokenValidity } from "@/api/serverSideApiService";
import { isErrorToToast } from "@/types/errors/ErrorToToast";

const protectedRoutes = ["/dashboard", "/account"];
const authRoutes = ["/login", "/signup", "/reset-password"];
const publicRoutes = authRoutes.concat(["/demo"]);

export default auth(async (req) => {
  const { nextUrl } = req;
  const path = nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.some((route) =>
    path.startsWith(route),
  );
  const isAuthRoute = authRoutes.some((route) => path.startsWith(route));

  if (isProtectedRoute) {
    const isValid = req.auth?.tokenId
      ? await checkTokenValidity(req.auth.tokenId)
      : false;

    if (!isValid || isErrorToToast(isValid)) {
      await signOut({ redirect: false });

      return NextResponse.redirect(
        new URL(`/login?redirect=${encodeURIComponent(path)}`, nextUrl.origin),
      );
    }
  }

  if (isAuthRoute && req.auth) {
    return NextResponse.redirect(new URL("/dashboard", nextUrl.origin));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
