import Portfolio from '../models/portfolio.model.js';
import { errorHandler } from '../utils/error.js';

export const createPortfolio = async (req, res, next) => {
    try {
        const portfolio = await Portfolio.create(req.body);
        return res.status(201).json(portfolio);
    } catch (error) {
        next(error);
    }
}

export const getPortfolios = async (req, res, next) => {
    try {
        const portfolio = await Portfolio.find()
        return res.status(200).json(portfolio);
    } catch (error) {
        next(error);
    }
};

export const getPortfolio = async (req, res, next) => {
    try {
        const portfolio = await Portfolio.findById(req.params.id);
        if (!portfolio) {
            return next(errorHandler(404, 'Portfolio not found!'));
        }
        return res.status(200).json(portfolio);
    } catch (error) {
        next(error);
    }
};

export const updatePortfolio = async (req, res, next) => {
    const portfolio = await Portfolio.findById(req.params.id);
    if (!portfolio) {
        return next(errorHandler(404, 'Portfolio not found!'));
    }

    try {
        const updatedPortfolio = await Portfolio.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
        );
        res.status(200).json(updatedPortfolio);
    } catch (error) {
        next(error);
    }
};

export const deletePortfolio = async (req, res, next) => {
    const portfolio = await Portfolio.findById(req.params.id);
    if (!portfolio) {
        return next(errorHandler(404, 'Portfolio not found!'));
    }

    try {
        await Portfolio.findByIdAndDelete(req.params.id);
        res.status(200).json("Portfolio has been deleted!");
    } catch (error) {
        next(error);
    }
};