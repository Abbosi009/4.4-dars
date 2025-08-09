//string 1
let n = 5;
let result = '';
for (let i = 0; i < n; i++) {
    result += String.fromCharCode(65 + i);
}
console.log(result);

//string 2
let char = 'A';
if (!isNaN(char) && char !== ' ') console.log("digit");
else if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) console.log("lotin");
else console.log(0);

//string 3
let str = "Hello";
console.log(str.charCodeAt(0), str.charCodeAt(str.length - 1));

//string 4
let N = 5, symbol = 'A';
console.log(symbol.repeat(N));

//string 5
let s = "Hello";
console.log(s.split('').reverse().join(''));

//string 6
function getStringStars(str, N) {
    return str.split('').join('*'.repeat(N));
}
console.log(getStringStars("ABC", 2));

//string 7
let text = "a1b23c";
let count = 0;
for (let ch of text) {
    if (!isNaN(ch) && ch !== ' ') count++;
}
console.log(count);

//string 8
let t = "abABқҚ";
let count2 = 0;
for (let ch of t) {
    if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') || 
        (ch >= 'а' && ch <= 'я') || (ch >= 'А' && ch <= 'Я')) {
        count2++;
    }
}
console.log(count2);

//string 9
let s9 = "HELlo";
console.log(s9.toLowerCase());

//string 10
let s10 = "HeLLo";
let res10 = '';
for (let ch of s10) {
    if (ch >= 'A' && ch <= 'Z') res10 += ch.toLowerCase();
    else if (ch >= 'a' && ch <= 'z') res10 += ch.toUpperCase();
    else res10 += ch;
}
console.log(res10);

//string 11
let numStr = "12.5";
if (/^\d+$/.test(numStr)) console.log(1);
else if (/^\d+\.\d+$/.test(numStr)) console.log(2);
else console.log(0);

//string 12
function getInverseNumber(n) {
    return Number(String(n).split('').reverse().join(''));
}
console.log(getInverseNumber(1234));

//string 13
let expr = "7 + 3 - 2";
console.log(eval(expr));

//string 14
let N1 = 3, N2 = 2, S1 = "abcdef", S2 = "uvwxyz";
console.log(S1.slice(0, N1) + S2.slice(-N2));

//string 15
let C = 'a', S = "banana";
console.log(S.split(C).join(C + C));

//string 16
let C16 = 'a', S1_16 = "banana", S2_16 = "X";
console.log(S1_16.split(C16).join(S2_16 + C16));

//string 17
let S1_17 = "abcabcabc", S2_17 = "abc";
let count17 = S1_17.split(S2_17).length - 1;
console.log(count17);

//string 18
let S1_18 = "abcabc", S2_18 = "abc";
console.log(S1_18.replace(S2_18, ""));

//string 19
let S1_19 = "abcabc", S2_19 = "abc";
console.log(S1_19.split(S2_19).join(""));

//string 20
let S1_20 = "abcabc", S2_20 = "abc", S3_20 = "XYZ";
console.log(S1_20.replace(S2_20, S3_20));

//string 21
let S1_21 = "abcabc", S2_21 = "abc", S3_21 = "XYZ";
console.log(S1_21.replace(new RegExp(S2_21 + '(?!.*' + S2_21 + ')'), S3_21));

//string 22
let st22 = "OLMA ASA QOQ";
let words22 = st22.split(' ');
let count22 = words22.filter(w => w[0] === w[w.length - 1]).length;
console.log(count22);

//string 23
let st23 = "AKFA ASAL ALMA";
let words23 = st23.split(' ');
let count23 = words23.filter(w => (w.match(/A/g) || []).length === 2).length;
console.log(count23);

//string 24
function getMaxOfString(str) {
    return str.split(' ').reduce((a, b) => a.length >= b.length ? a : b);
}
console.log(getMaxOfString("salom dunyo yaxshi"));

//string 25
let st25 = "salom dunyo yaxshi";
console.log(st25.split(' ').join('.'));

//string 26
let st26 = "salom dunyo yaxshi";
console.log(st26.split(' ').map(w => w[0].toUpperCase() + w.slice(1)).join(' '));

//string 27
let st27 = "Salom, dunyo!";
let marks = [".", ",", ";", ":", "?", "!", "-", "'", '"', "(", ")"];
let count27 = 0;
for (let ch of st27) {
    if (marks.includes(ch)) count27++;
}
console.log(count27);

//string 28
let path28 = "D:/Qudrat_c++/books/My_book.exe";
console.log(path28.split('/').pop().split('.')[0]);

//string 29
let path29 = "D:/Qudrat_c++/books/My_book.exe";
console.log(path29.split('.').pop());

//string 30
let path30 = "D:/Qudrat_c++/books/My_book.exe";
let parts30 = path30.split('/');
console.log(parts30.length > 2 ? parts30[parts30.length - 2] : "/");
