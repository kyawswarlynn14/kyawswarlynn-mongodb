import Social from "../models/social.model.js";
import { errorHandler } from '../utils/error.js';

export const createSocial = async (req, res, next) => {
    try {
        const social = await Social.create(req.body);
        return res.status(201).json(social);
    } catch (error) {
        next(error);
    }
}

export const getSocials = async (req, res, next) => {
    try {
        const social = await Social.find();
        return res.status(200).json(social);
    } catch (error) {
        next(error);
    }
};

export const getSocial = async (req, res, next) => {
    try {
        const social = await Social.findById(req.params.id);
        if (!social) {
            return next(errorHandler(404, 'Social not found!'));
        }
        return res.status(200).json(social);
    } catch (error) {
        next(error);
    }
};

export const updateSocial = async (req, res, next) => {
    const social = await Social.findById(req.params.id);
    if (!social) {
        return next(errorHandler(404, 'Social not found!'));
    }

    try {
        const updatedSocial = await Social.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
        );
        res.status(200).json(updatedSocial);
    } catch (error) {
        next(error);
    }
};

export const deleteSocial = async (req, res, next) => {
    const social = await Social.findById(req.params.id);
    if (!social) {
        return next(errorHandler(404, 'Social not found!'));
    }

    try {
        await Social.findByIdAndDelete(req.params.id);
        res.status(200).json("Social has been deleted!");
    } catch (error) {
        next(error);
    }
};