import mongoose from "mongoose"

const URL = "mongodb://localhost:27017";


const Connection = async () => {
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log(" Database Connected successfully.... ");
    } catch (error) {
        console.log(" error", error.message);
    }
}
export default Connection;
