import { Product } from './models/product.model';
const product_form = document.getElementById('product-form')
product_form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('OK')
    //
    const productName = (<HTMLInputElement>document.getElementById('product_name')).value;
    const productPrice = +(<HTMLInputElement>document.getElementById('price')).value;
    const newProduct = new Product(productName, productPrice);
    const product_list = document.getElementById('product_list');
    product_list.insertAdjacentHTML('afterbegin', `<tr>
    <td >${newProduct.id}</td>
    <td class='table-success'>${newProduct.name}</td>
    <td>${newProduct.price}</td>
    </tr>`);
})