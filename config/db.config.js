// db connect
const mongoose = require("mongoose");
const connectDB = async () => {
    try {
        const url = process.env.MONGO_URI || 'mongodb://localhost/MERN_API'
        await mongoose.connect(url)
            .then(() => console.log('db connection success'))
            .catch((err) => console.log(err))
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}
module.exports = {connectDB};
