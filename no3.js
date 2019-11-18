
cekkoin=(koin)=>{
    var bayar=0


    if(koin%25==0){
        bayar+=1
        koin-=25
    }
    if(koin%10==0){
        bayar+=1
        koin-=10
    }
    if(koin%5==0){
        bayar+=1
        koin-=5
    }
    if(koin%1==0){
        bayar+=1
        koin-=1
    }
    return bayar
}
console.log(cekkoin(50))
