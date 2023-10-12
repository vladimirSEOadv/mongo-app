const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: { type: String, require: true },
  description: { type: String, require: true },
  category: [[String]],
  label: { type: Number, min: 1, max: 99 },
  price: { type: Number, require: true },
  discount: Number,
  img: String,
  avalible: { type: Boolean, require: true },
});

const Product = mongoose.model("Product", productSchema);
// Создание модели. Первым аргументом принимает название модели, вторым схему
// Имя модели обязательно должно быть в единственном числе.
// В данном примере это Product, так Монго будет искать коллекцию Products

module.exports = Product;

// Пример продукта
// const product = {
//     title: "text",
//     description: "text",
//     category: ["text1", "text2"],
//     label: 123,
//     price: 123,
//     discount: 123,
//     img: "text",
//     avalible: true,
// }
// Documentation https://mongoosejs.com/docs/schematypes.html
// require - означает что поле обязательно должно быть при

// Пример: Если необходимо описать тип объекта с вложенными полями
// const myObj = {
//     data: {
//         dataName: "text",
//         dataNumb: 123
//     }
// }
// const myObjSchema = new Schema({
//   data: {
//     dataName: String,
//     dataNumb: Number,
//   },
// });

// Пример: Если необходимо описать тип поля с вложенным массивом объектов
// const comment = {
//   comment: [
//     {
//       name: "bla bla",
//       text: "autor",
//     },
//   ],
// };
// const commentSchema = new Schema({
//   comment: [
//     {
//       name: { type: String },
//       text: { type: String },
//     },
//   ],
// });
