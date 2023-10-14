import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true,
            unique: true,
        },
        position: {type: String},
        description: {type: String},
        img_url: {type: String},
        fb_url: {type: String}
    },
    { timestamps: true}
);

const Item = mongoose.model('Item', itemSchema);

export default Item;