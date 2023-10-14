import mongoose from "mongoose";

const socialSchema = new mongoose.Schema(
    {
        name: {type: String},
        link: {type: String},
    },
    { timestamps: true}
);

const Social = mongoose.model('Social', socialSchema);

export default Social;