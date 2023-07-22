import { db, cartTable } from "@/lib/drizzle"
import { NextRequest, NextResponse } from "next/server"


export const GET = async (request:NextRequest) => {
    try {
        const res = await db.select().from(cartTable)
        return NextResponse.json({res})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message: 'Something went wrong'})
    }
}