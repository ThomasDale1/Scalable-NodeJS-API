import express, { Request, Response } from "express";

export function listProducts(req: Request, res: Response) {
    res.send('List of products')
}

export function createProduct(req: Request, res: Response) {
    res.send('New product created')
}

export function getProductById(req: Request, res: Response){
    res.send('You are checking the product ' + req.params.id)
}

export function updateProduct(req: Request, res: Response){
    res.send('Updating product')
}

export function deleteProduct(req: Request, res: Response){
    res.send('Delete product')
}