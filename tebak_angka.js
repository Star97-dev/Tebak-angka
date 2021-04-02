//Opening game
alert('Game menebak angka\n Tebak angka 1 - 10\n Anda mempunyai 3 kesempatan untuk menebak');


// while( hasil != comp){

//Membuat random value
var comp = Math.random();
if(comp < 0.1){
    comp = '1';
} else if(comp >= 0.1 && comp < 0.2) {
    comp = '2';
} else if(comp >= 0.2 && comp < 0.3) {
    comp = '3';
} else if(comp >= 0.3 && comp < 0.4) {
    comp = '4';
} else if(comp >= 0.4 && comp < 0.5) {
    comp = '5';
} else if(comp >=0.5 && comp < 0.6) {
    comp = '6';
} else if(comp >=0.6 && comp < 0.7) {
    comp = '7';
} else if(comp >=0.7 && comp < 0.8) {
    comp = '8';
} else if(comp >=0.8 && comp < 0.9) {
    comp = '9';
} else {
    comp = '10';
}

//Input angka tebakan
var kesempatan = '2';
for(var kesempatan; kesempatan >= 1; kesempatan--){
var tebak = prompt('Masukkan angka yang anda tebak\n hint : (1 - 10)');

//Membuat Hasil
    var b = 'benar';
    var s = 'salah';
    if(tebak === comp){
        alert('Tebakan anda ' + b + '!');
        break;
    } else if(tebak == null){
        alert('Inpunt tidak boleh kosong!');
    } else if(tebak < comp){
        alert('Tebakan terlalu rendah \n silahkan coba lagi \n Kesempatan anda tingal ' + kesempatan + ' ' + comp);
    } else if(tebak > comp){
        alert('Tebakan terlalu tinggi \n silahkan coba lagi \n Kesempatan anda tingal ' + kesempatan + ' ' + comp);
    } else {
        alert('Tebakan anda '+ s +'!');
    }   
}  
    if(kesempatan == 0){
        alert('Kesempatan telah habis, anda gagal!\nNilai tebakan anda ' + tebak + ', Hasil komputer adalah ' + comp);
    } else {
        alert ('Selamat anda berhasil\nNilai tebakan anda ' + tebak + ', Hasil komputer adalah ' + comp);
    }
    
// }
