/*
Math.random() ile rastgele sayı üretebilirsiniz. bu fonksiyon 0 dahil 1 hariç bir değer üretir mesela 0.56 gibi. sonrasında bu ifadenin sonucunu istediğiniz aralığın üst sınırıyla çarparsanız verilen aralıkta değer üretmiş olursunuz.

mesela 0 ile 1 arasında bir sayı için (Math.random() * 10) + 1 size 1 ile 10 arasında ki 10 da dahil sayı üretmiş olur.

üretilen bu sayı ondalıklı olabilir tam sayıya dönüştürmek için Math.floor() kullanabilirsiniz.

küçük bir piyango oyunu tasarlayınız. sistem iki basamaklı bir sayı üretmeli kullanıcıdan da bu sayıyı tahmin etmesini istemelisiniz 

eğer kullanıcı sayıyı tam olarak doğru bilirse 10000 Tl
eğer kullanıcı sayının basamaklarını bilirse yani 65 yerine 56 yazmışsa 5000 TL
eğer kullanıcı şanslı numaranın sadece bir basamağını bilirse 1000 TL kazanır.
*/


let uretilenSayi = (Math.random() * 90)+ 10;  // burada verilen çıktı double olacaktır.
uretilenSayi = Math.floor(uretilenSayi); // burada ise bu çıktıyı tam sayıya dönüştürüp yazdıracaktır.
let kullaniciSayisi = parseInt(prompt("iki basamaklı bir sayı giriniz","10")); // burada ise kullanıcının girdiği sayı alınacaktır.


// burada sistemin ürettiği sayının birler basamağı ile onlar basamağını bulup ekrana yazdırdık.
let uretilenSayininBirlerBasamagi = uretilenSayi % 10;
let uretilenSayininOnlarBasamagi = parseInt(uretilenSayi / 10);

console.log(`üretilen sayının birler basamağı: ${uretilenSayininBirlerBasamagi}, üretilen sayının onlar basamağı: ${uretilenSayininOnlarBasamagi}`);


// burada ise kullanıcının girdiği sayının birler basamağı ile onlar basamağını bulup kullanıcı sayısına eşitleyip ekrana yazdırdık.
let userSayininBirlerBasamagi = kullaniciSayisi % 10;
let userSayininOnlarBasamagi = parseInt(kullaniciSayisi / 10);

console.log(`kullacı sayısının birler basamağı: ${userSayininBirlerBasamagi}, kullanıcı sayısının onlar basamağı: ${userSayininOnlarBasamagi}`);

console.log(`sistemin ürettiği sayı ${uretilenSayi} kullanıcının girdiği sayı ${kullaniciSayisi}`);

// burada üretilen sayı kullanıcının girdiği sayıya eşitse çalışacak şart blogu
if (uretilenSayi === kullaniciSayisi) {
    console.log(`tebrikler 10 bin TL kazandınız  tahmininiz: ${kullaniciSayisi}, üretilen:${uretilenSayi}`);
}

// burada mesela sistem 65 sayısını üretti kullanıcı ise 56 sayısını girdi bu halde çalışacak şart blogu
else if (uretilenSayininBirlerBasamagi === userSayininOnlarBasamagi && uretilenSayininOnlarBasamagi === userSayininBirlerBasamagi) {
    console.log(`tebrikler 5 bin TL kazandınız  tahmininiz: ${kullaniciSayisi}, üretilen:${uretilenSayi}`);
}

// burada sistemin ürettiği sayının birler basamağı ile kullanıcının girdiği sayının birler basamağı eşitse ya da sistemin onlar basamağı ile kullanıcı sayısının  onlar basamağı sayısı aynı ise çalışacak şart blogu
else if (uretilenSayininBirlerBasamagi === userSayininBirlerBasamagi || uretilenSayininOnlarBasamagi === userSayininOnlarBasamagi) {
    console.log(`tebrikler 1 bin TL kazandınız  tahmininiz: ${kullaniciSayisi}, üretilen:${uretilenSayi}`);
}
else{
    console.log("maalesef herhangi bir ücret kazanamadınız.");
}

