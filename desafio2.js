const fs = require('fs');
class Contenedor {
  constructor(title){
    this.title =title;
  }
  async firstProduct(objeto) { 
    try {
        
        objeto.id = 1;
        await fs.promises.writeFile(this.title, JSON.stringify([objeto], null, 2));
    } catch(err) {
        console.log(err.message);
    };
};
async save(object) {
  try {
      const data = await fs.promises.readFile(this.title, 'utf-8');
      const previousInfo = JSON.parse(data);
      let newId = previousInfo[previousInfo.length - 1].id + 1;
      object.id = newId;
      let newArray = [...previousInfo, object];
      await fs.promises.writeFile(this.title, JSON.stringify(newArray));
  } catch(err) {
      console.log('No se tiene creado ningun objeto aun', err.message);
      this.firstProduct(object);
  };
};

  async getById( id) {
    const data = await fs.readFile(this.title,"utf-8");
    const allData = JSON.parse(data);
    const res = allData.find(item => item.id === id);
    console.log(res);
    return res;
  }
  async getAll() {
    const data = await fs.promises.readFile(this.title, "utf-8");
    const allData = JSON.parse(data);
    console.log(allData);
    return allData;
  }
  async deleteById(id) {
    const data = await fs.promises.readFile(this.title, 'utf-8');
  const allData =  JSON.parse(data);
  console.log(data)
  const res = allData.filter(element => element.id !== id);
  await fs.promises.writeFile(this.title, JSON.stringify(res), null, 2);
  }

  async deleteAll() {
    try {
      await fs.promises.unlink(this.title);
  } catch(err) {
      console.log(err.message);
  }
  }
}
module.exports = Contenedor;
const newProduct = new Contenedor("./productos.txt");
newProduct.firstProduct({
  name: "Producto 1",
  price: 100,
  description: "Descripcion del producto 1"
});
newProduct.save({
  name: "Producto 2",
  price: 200,
  description: "Descripcion del producto 2"
});