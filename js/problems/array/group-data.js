var arr = [
    {name:"suyahs", amount:10},
    {name:"brijesh", amount:100},
    {name:"suyahs", amount:10},
    {name:"brijesh", amount:190},
    {name:"suyahs", amount:10},
    {name:"Karan", amount:90},
    {name:"Harshit", amount:98},
    {name:"prateek", amount:73},
    {name:"Harshit", amount:54},
    {name:"Shivam", amount:83},
    {name:"Shivam", amount:900},
]




var grouped = []
function getElem(name){
    var pos =  {index:false, item:null}
    
    pos.item = grouped.find(function(el){
        return el.name == name
    })

    pos.index = grouped.findIndex(function(el){
        return el.name == name
    })
    
    return pos
}


arr.forEach(function(e){
    var aleardyInGrpdArray = getElem(e.name)
    if(aleardyInGrpdArray.index != -1){
        //already in grouped array
        var item = {...aleardyInGrpdArray.item}
        item.amount.push(e.amount)
        grouped[aleardyInGrpdArray.index] = item

    }else{
        //element not in grouped array
        var element = {name:e.name, amount:[e.amount]}
        grouped.push(element)

    }
})





console.log(grouped)