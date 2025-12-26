
// fake api


export const addWishListApi = (item)=>
    new Promise((resolove,reject)=>
    setTimeout(() => {
        Math.random()>0.2? resolove(item):reject("Failed to add wishlist");
    }, 500))

export const removeToWishListApi = (id)=>
    new Promise((resolove, rejected)=>{
        setTimeout(()=>{
            Math.random()>0.2 ? resolove(id):rejected('Failed to remove wishlist')
        },500)
    })

