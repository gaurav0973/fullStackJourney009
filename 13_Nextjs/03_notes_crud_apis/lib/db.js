import mongoose from "mongoose"

const MONGODB_URI = process.env.DATABASE_URI
if(!MONGODB_URI){
    throw new Error("Please define the MONGODB_URI environment variable inside .env.local")
}

let isConnected = false

export async function connectToDB(){

    if(isConnected){
        console.log("Already connected to database")
        return
    }

    try {
        const db = await mongoose.connect(MONGODB_URI)
        // console.log("Connected to database : ", db.connection)
        // console.log("Connected to database : ", db.connections)
        // console.log("Connected to database : ", db.connections[0].readyState)
        isConnected = db.connections[0].readyState === 1
        console.log("Connected to database")
        
    } catch (error) {
        console.error("Error connecting to database", error)
        throw error
    }
}