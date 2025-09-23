import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

async function verifyJWT(token) {
    try {
        const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET);
        const { payload } = await jwtVerify(token, secret);
        return payload;
    } catch (err) {
        console.log("JWT Error:", err);
        return null;
    }
}



export default async function middleware(req) {

    const path = req.nextUrl.pathname;
    const token = req.cookies.get("token")?.value;
    const role = req.cookies.get("role")?.value;


    // Check token validity
    const decoded = token ? await verifyJWT(token) : null;

    console.log('check start');
    console.log(decoded);
    console.log('check end');

    // Protected routes
    const protectedRoutes = ["/application"];
    const isProtected = protectedRoutes.some(route => path.startsWith(route));

    // If not logged in but trying to access protected routes
    if (!decoded && isProtected) {
        return NextResponse.redirect(new URL("/signin", req.nextUrl));
    }

    // Role-based access
    if (decoded && role) {
        if (role !== "Admin" && path.startsWith("/admin")) return NextResponse.redirect(new URL("/signin", req.nextUrl));
        if (role !== "Hr" && path.startsWith("/hr")) return NextResponse.redirect(new URL("/signin", req.nextUrl));
        if (role !== "Project Manager" && path.startsWith("/projectmanager")) return NextResponse.redirect(new URL("/signin", req.nextUrl));
        if (role !== "Employee" && path.startsWith("/employee")) return NextResponse.redirect(new URL("/signin", req.nextUrl));
    }

    // If logged in but trying to visit signin page
    if (decoded && path.startsWith("/signin")) {
        const redirects = {
            "Admin": "/admin",
            "Hr": "/hr",
            "Project Manager": "/projectmanager",
            "Employee": "/employee"
        };
        if (role && redirects[role]) return NextResponse.redirect(new URL(redirects[role], req.nextUrl));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};