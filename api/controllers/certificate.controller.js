import Certificate from '../models/certificate.model.js';
import { errorHandler } from '../utils/error.js';

export const createCertificate = async (req, res, next) => {
    try {
        const certificate = await Certificate.create(req.body);
        return res.status(201).json(certificate);
    } catch (error) {
        next(error);
    }
}

export const getCertificates = async (req, res, next) => {
    try {
        const certificate = await Certificate.find()
        return res.status(200).json(certificate);
    } catch (error) {
        next(error);
    }
};

export const getCertificate = async (req, res, next) => {
    try {
        const certificate = await Certificate.findById(req.params.id);
        if (!certificate) {
            return next(errorHandler(404, 'Certificate not found!'));
        }
        return res.status(200).json(certificate);
    } catch (error) {
        next(error);
    }
};

export const updateCertificate = async (req, res, next) => {
    const certificate = await Certificate.findById(req.params.id);
    if (!certificate) {
        return next(errorHandler(404, 'Certificate not found!'));
    }

    try {
        const updatedCertificate = await Certificate.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
        );
        res.status(200).json(updatedCertificate);
    } catch (error) {
        next(error);
    }
};

export const deleteCertificate = async (req, res, next) => {
    const certificate = await Certificate.findById(req.params.id);
    if (!certificate) {
        return next(errorHandler(404, 'Certificate not found!'));
    }

    try {
        await Certificate.findByIdAndDelete(req.params.id);
        res.status(200).json("Certificate has been deleted!");
    } catch (error) {
        next(error);
    }
};