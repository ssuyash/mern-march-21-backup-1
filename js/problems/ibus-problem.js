// 1) minimum = 5  init => 3km
// 2) over 3 km => 3/km 
// 3) contiguous station => minimum

var stations = {
    MHOW:{dist:0, nextStation:'RAU', prevStation:''},
    RAU:{dist:10, nextStation:'RJGS', prevStation:'MHOW'},
    RJGS:{dist:12, nextStation:'BHWN', prevStation:'RAU'},
    BHWN:{dist:14, nextStation:'NVLK', prevStation:"RJGS"}, 
    NVLK:{dist:18, nextStation:'', prevStation:"BHWN"}
}


//stations = ['MHOW', 'RAU', 'RJGS', 'BHWN', 'NV']

var src = "NVLK"
var dst = "BHWN"

var srcDst = stations[src]['dist']
var dstDst = stations[dst]['dist']
var srcNextStation = stations[src]['nextStation']
var srcPrevStation = stations[src]['prevStation']
var isCont = false

if(dst == srcNextStation || dst==srcPrevStation){
    isCont = true
}

var fare = 5

if(!isCont){
    var travelDst = dstDst-srcDst 
    if(travelDst > 3){
        fare += (travelDst-3)*3
    }
}

console.log(fare)




