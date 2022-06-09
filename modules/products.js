////////////////////////////////////////////////
// Our Models
////////////////////////////////////////////////
// pull schema and model from mongoose
const { Schema, model } = mongoose;

// make fruits schema
const productsSchema = new Schema({
  name: String,
  color: String,
  readyToEat: Boolean,
});

// make fruit model
const Product = model("Product", productsSchema);
