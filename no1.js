// lelang=(angka)=>{
//     var harga=10000
//     var hargaakhir=0
//     var persenan1=harga*(0.1)
//     var persenan2=harga*(0.2)
//     for(i=0;i<angka;i++){
//          harga+=harga*0.2
//     }
//     return harga
// }
// console.log(lelang(2))

lelang=(angka)=>{
    var harga=10000
    if(harga<=30000000){
        for(i=0;i<angka;i++){
            if(i%4==0){
                harga+=harga*0.1
            }else{
                harga+=harga*0.2
            }
        }
    }
    return harga
}
console.log(lelang(1))