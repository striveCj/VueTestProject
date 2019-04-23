export const  addToCart=({commit},product)=>{
  commit(types,ADD_TO_CART,{
    id:parseInt(product.id),
    image:product.image,
    title:product.title,
    quantity: product.quantity,
    price:product.price
  })
}
