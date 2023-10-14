import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true,
            unique: true,
        },
        content: {type: String},
        demo_link: {type: String},
        img_url: {type: String},
        fb_url: {type: String}
    },
    { timestamps: true}
);

const Certificate = mongoose.model('Certificate', certificateSchema);

export default Certificate;