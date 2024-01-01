import Ticket from "../(models)/Ticket";
import { NextResponse } from "next/server";

export async function POST(req){
    try{
        const body = await req.json();
        const ticketdata = body.formData;
        await Ticket.create(ticketdata);
        return NextResponse.json({message: "Ticket Created", error},{status: 201})
    }catch(error){
        return NextResponse.json({message: "Error", error},{status: 500})
    }
}