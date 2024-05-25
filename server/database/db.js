import mongoose from "mongoose";

const connection = async (username, password) => {
    const URL = `mongodb://vishva:vishva123@ac-otnzjnu-shard-00-00.an5nvnk.mongodb.net:27017,ac-otnzjnu-shard-00-01.an5nvnk.mongodb.net:27017,ac-otnzjnu-shard-00-02.an5nvnk.mongodb.net:27017/?ssl=true&replicaSet=atlas-6mwkzi-shard-0&authSource=admin&retryWrites=true&w=majority&appName=blog-app`
    try {
        await mongoose.connect(URL);
        console.log('Database connected successfully.');
    } catch (error) {
        console.log('Error while connecting database', error);
    }
};

export default connection;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             