import Service from '../models/service.model.js';
import { errorHandler } from '../utils/error.js';

export const createService = async (req, res, next) => {
    try {
        const service = await Service.create(req.body);
        return res.status(201).json(service);
    } catch (error) {
        next(error);
    }
}

export const getServices = async (req, res, next) => {
    try {
        const service = await Service.find()
        return res.status(200).json(service);
    } catch (error) {
        next(error);
    }
};

export const getService = async (req, res, next) => {
    try {
        const service = await Service.findById(req.params.id);
        if (!service) {
            return next(errorHandler(404, 'Service not found!'));
        }
        return res.status(200).json(service);
    } catch (error) {
        next(error);
    }
};

export const updateService = async (req, res, next) => {
    const service = await Service.findById(req.params.id);
    if (!service) {
        return next(errorHandler(404, 'Service not found!'));
    }

    try {
        const updatedService = await Service.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
        );
        res.status(200).json(updatedService);
    } catch (error) {
        next(error);
    }
};

export const deleteService = async (req, res, next) => {
    const service = await Service.findById(req.params.id);
    if (!service) {
        return next(errorHandler(404, 'Service not found!'));
    }

    try {
        await Service.findByIdAndDelete(req.params.id);
        res.status(200).json("Service has been deleted!");
    } catch (error) {
        next(error);
    }
};