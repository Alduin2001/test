const Category = require("../models/category");

class CategoryController {
  static async create(req, res) {
    try {      
      const { category_name } = req.body;
      const category = new Category({
        category_name: category_name,
      });
      await category.save();
      res.json({ msg: "Успешно" });
    } catch (err) {
      res.json({ err });
    }
  }
  static async getCategories(req,res){
    try{
      const categories = await Category.find({});
      res.json({categories});
      
    }catch(err){
      console.log(err);
      res.json({err});
    }
  }
  static async deleteCategory(req,res){
    try{
      const {id} = req.body;
      const deleted = Category.findByIdAndDelete(id);
      
    }catch(err){

    }
  }
}

module.exports = CategoryController;
