import mongoose, { connect } from "mongoose";

const conectarDB = async () => {
    try {
        const connectionDB = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        const url = `Se está conectando a MONGO en server ${connectionDB.connection.host} - y PUERTO ${connectionDB.connection.port}`;
        console.log(url);
    } catch (error) {
        console.log(error);
    }
}

export default conectarDB;