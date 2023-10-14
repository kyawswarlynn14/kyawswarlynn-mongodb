import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true,
            unique: true,
        },
        content: {type: String},
        demo_link: {type: String},
        code_link: {type: String},
        img_url: {type: String},
        fb_url: {type: String}
    },
    { timestamps: true}
);

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

export default Portfolio;