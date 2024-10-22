
let product = [{
    "Name": "iphone",
    "category": "mobile",
    "price": 40000
},
{
    "Name": "mphone",
    "category": "hmobile",
    "price": 45000
},
{
    "Name": "sphone",
    "category": "cmobile",
    "price": 20000
},{
    "Name": "kphone",
    "category": "nmobile",
    "price": 30000
},{
    "Name": "lphone",
    "category": "omobile",
    "price": 10000
}]
// product.sort({price},{category})=price-category
product.sort((a,b)=>(a.price)-(b.price))
console.log(product.sort());

product.sort((a,b)=>String(a.category)-String(b.category))
console.log(product.sort());





for(let i=1;i<=10;i++){
    if(i%2===0){
        console.log(i+"is even");
        
    }else{
        console.log(i+"is odd");
        
    }
}