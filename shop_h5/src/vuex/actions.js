export const  addToCart=({commit},product)=>{
  commit(types,ADD_TO_CART,{
    id:parseInt(product.id),
    image:product.image,
    title:product.title,
    quantity: product.quantity,
    price:product.price
  })
}
export const  deleteItem={commit},id)=>{
  commit(types.DELETE_ITEM)
}

export const changeItemNumber=({commin},{id,type})=>{
   commit(type.CHANGE_ONE_QUANTITY,{
    id:parseInt(id),
     type
  })
}
