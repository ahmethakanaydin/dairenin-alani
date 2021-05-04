const arguments = process.argv.slice(2);

const alan = (r) => {
    let pi = Math.PI;
    let sonuc = pi * (r*r);
    console.log(`Yarıçapı: ${r} Dairenin Alanı: ${sonuc.toFixed(2)}`);
};

alan(arguments[0]*1);