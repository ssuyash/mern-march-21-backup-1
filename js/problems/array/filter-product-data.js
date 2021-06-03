var filter = [
    {brands:["apple", "samsung"]},
    {category:["mobile"]}
]

var products = [
    {name:"abc", brand:"xyz", category:"cat1"},
    {name:"abc", brand:"apple", category:"mobile"},
    {name:"abc", brand:"samsung", category:"mobile"},
    {name:"abc", brand:"xyz", category:"cat1"},
    {name:"abc", brand:"boat", category:"speaker"},
    {name:"abc", brand:"xyz", category:"cat1"},
]

var brandInFilter = filter[0].brands
var categoryInFilter = filter[1].category

var filtered = products.filter(function(product){
    var brand = product.brand
    var category = product.category

    return (brandInFilter.indexOf(brand)!=-1 && categoryInFilter.indexOf(category) != -1)
})


console.log(filtered)


