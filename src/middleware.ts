import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
    if (req.nextUrl.pathname === "/") {
        return NextResponse.redirect(new URL("/login", req.nextUrl.origin));
    }

    return NextResponse.next();
}