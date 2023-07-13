const Category = require('../model/Category.js');
const Product = require('../model/Product.js');

const SellerController = {
  //! Category
  async createCategory(req, res) {
    const { name } = req.body;

    try {
      const createdCategory = await Category.create({ name });
      res.status(200).json({ message: 'Category created successfully', data: createdCategory });
    } catch (error) {
      console.error('Error creating Category:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  async getAllCategory(req, res) {
    try {
      const categories = await Category.findAll();
      res.status(200).json({ message: 'Categories retrieved successfully', data: categories });
    } catch (error) {
      console.error('Error retrieving categories:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  async getCategoryById(req, res) {
    const categoryId = req.params.id;
    try {
      const category = await Category.findByPk(categoryId);
      if (!category) {
        return res.status(404).json({ error: 'Category not found' });
      }
      res.status(200).json({ message: 'Category retrieved successfully', data: category });
    } catch (error) {
      console.error('Error retrieving category:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  async updateCategory(req, res) {
    const categoryId = req.params.id;
    const { name } = req.body;
    try {
      const category = await Category.findByPk(categoryId);

      if (!category) {
        return res.status(404).json({ error: 'Category not found' });
      }

      category.name = name;
      await category.save();

      res.status(200).json({ message: 'Category updated successfully', data: category });
    } catch (error) {
      console.error('Error updating category:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  async deleteCategory(req, res) {
    const categoryId = req.params.id;

    try {
      const category = await Category.findByPk(categoryId);
      if (!category) {
        return res.status(404).json({ error: 'Category not found' });
      }
      await category.destroy();
      res.status(200).json({ message: 'Category deleted successfully' });
    } catch (error) {
      console.error('Error deleting category:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  //! Products
  async createProduct(req, res) {
    const { name, description, price, stock, CategoryId, SellerId } = req.body;
    try {
      const product = await Product.create({ name, description, price, stock, CategoryId, SellerId });
      res.status(200).json({ message: 'Product created successfully', data: product });
    } catch (error) {
      console.error('Error creating product:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  async getAllProducts(req, res) {
    try {
      const products = await Product.findAll();
      res.status(200).json({ message: 'Products retrieved successfully', data: products });
    } catch (error) {
      console.error('Error retrieving products:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  async getProductById(req, res) {
    const productId = req.params.id;
    try {
      const product = await Product.findByPk(productId);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.status(200).json({ message: 'Product retrieved successfully', data: product });
    } catch (error) {
      console.error('Error retrieving product:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  async updateProduct(req, res) {
    const productId = req.params.id;
    const { answer_content } = req.body;
    try {
      const product = await Product.findByPk(productId);

      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      product.answer_content = answer_content;
      await product.save();
      res.status(200).json({ message: 'Product updated successfully', data: product });
    } catch (error) {
      console.error('Error updating product:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  async deleteProduct(req, res) {
    const productId = req.params.id;

    try {
      const product = await Product.findByPk(productId);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      await product.destroy();
      res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
      console.error('Error deleting product:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

module.exports = SellerController;
