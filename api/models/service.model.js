import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true,
            unique: true,
        },
        content: {type: String},
        img_url: {type: String},
        fb_url: {type: String}
    },
    { timestamps: true}
);

const Service = mongoose.model('Service', serviceSchema);

export default Service;