const mongoose = require("mongoose")
const {Product} = require('../models/productSchema');

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products)
    } catch (error) {
        res.status(500).json({error: error.message});
    } 
};

exports.getProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id)

        if(!product){
            return res.status(404).json({error: 'Product not found'})
        }

        res.json(product)

    } catch (error) {
        res.status(500).json({error: error.message});
    } 
};

exports.createProduct = async (req, res) => {
    try {
        
        const {name, description, price, variants} = req.body;

        const product = new Product({
            name,
            description,
            price,
            variants: variants.map(variant => ({
                name: variant.name,
                sku: variant.sku,
                additionalCost: variant.additionalCost || 0,
                stockCount: variant.stockCount || 0,
            })),
        });

        await product.save();

        res.status(201).json(product);
        
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const {name, description, price, variants } = req.body;

        const updateProduct = await Product.findByIdAndUpdate(
            id,
            {name,description,price},
            {name: true, runValidators: true }
        );

        if(!updateProduct){
            return res.status(404).json({error: 'Product not found'});
        }

        if (variants && variants.length > 0) {
            updateProduct.variants = variants.map(variant => ({
                name: variant.name,
                sku: variant.sku,
                additionalCost: variant.additionalCost || 0,
                stockCount: variant.stockCount || 0,
            }));
        }

        await updateProduct.save();

        res.json(updateProduct);

    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;
    
        const product = await Product.findById(productId);
    
        if (!product) {
          return res.status(404).json({ error: 'Product not found' });
        }

        const deletedProduct = await Product.findByIdAndDelete(productId);

        res.json({ message: 'Variant deleted successfully' });
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};

exports.searchProducts = async (req,res) => {

    try {

        const searchProduct = req.query.product ;
        const searchVariant = req.query.variant;
        const searchDescription = req.query.description ;

        if(!searchProduct && !searchDescription && !searchVariant){
            return res.status(400).json({error: 'Search item is required'})
        }

        if(searchProduct){
            const products = await Product.find(
                    { name: { $regex: searchProduct, $options: 'i' } },
            );
            res.json(products)
        }
        if(searchDescription){
            const products = await Product.find(
                // $or: [
                    { description: { $regex: searchDescription, $options: 'i' } },
                // ],
            );
            res.json(products)
        }
        if(searchVariant){
            const products = await Product.find({
                'variants.name': { $regex: searchVariant, $options: 'i' } ,
            });
            res.json(products)
        }

    } catch (error) {
        res.status(500).json({error: error.message})
    }

}