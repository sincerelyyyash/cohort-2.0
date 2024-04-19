import { NextResponse } from "next/server";


export function GET(){
    return NextResponse.json({
        messsage: "You are logged in"
    })
}