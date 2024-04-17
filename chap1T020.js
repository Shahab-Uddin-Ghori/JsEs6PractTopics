// ** slice**  / ** splice** / **indexof** // ** lenght **

// slice hamai exract kr k deta hai value ek range me isky 2 parameter hoty hai starting or End.
// mtlb kha se hamain exract start krna hai end mtlb kha tak krna hai
//  agar ham index 1 karty hai to wo 1 index ko bhi pic kry ga or 4 end rkhty hai to 4 index ko  pic nhi kry ga IMP index hamsesha 0 se start hoti hai

// indeox of agar kisi asy element in index of check kr rhy ho jo hy hi nhi to wo ** -1 ** ayeggi..
console.log("\t\t\tLearning Slice");
let arr5 = ["Khan", "mugal", "Ghori", "Jutt"];
console.log(arr5);
console.log(arr5.slice(1, 4)); //
console.log(arr5.indexOf("Khan"));
console.log(arr5.indexOf("han"));

// slice me agar hamai last se num extract krnaho to ham -1 likhty hai
console.log(arr5.slice(-1));

//                                  ***Slice***
let testSlice = [
  "Shahab",
  "Ghori",
  "Noman",
  "Hamza",
  "Khan",
  1,
  23,
  25,
  28,
  "1",
  "23",
  "25",
  "28",
];
console.log(testSlice);

//   checking lenght of index // mtlb indexme kitny no of element hai index hamesha 0 se start hongi

console.log(testSlice.length); // 13 element hai 0 to 12 first element 0 index pr or last 12 index pr

// extract 4, to 7 index
console.log(testSlice.slice(4, 7)); // ans is Khan, 1, 23 // 4 index se lekar 7 tk extract kiya lekin 4 ko pic kiya 7 ko nhi
// start index ko slice pic krta hai end ko nhi krta..
// extract 0,10
console.log(testSlice.slice(0, 10)); // 10 index extract ki 0 se 9 tk.. as we know end index ko pick nhi kryga..

//                                    ***Splice***
//  Spilce Method Array me add,Remove and Replacing krny k liye hota hai means array k content ko ham apni marzi se change kr sakty hai...
//    isky 3 parameters hoty hai.. start , Delete Count(kitny array k  elemts ko delete krna hai), jo content remove/replace krna hai wo likhty hai.. last add krny ka parameter

// here some Details
// start: The index at which to start changing the array. If greater than the length of the array, start will be set to the length of the array. If negative, it will begin that many elements from the end of the array. If negative, start will be set to 0.
// deleteCount (Optional): The number of elements to remove from the array. If omitted or if greater than the number of elements starting at start, all elements through the end of the array will be removed. If deleteCount is 0 or negative, no elements are removed.
// item1, item2, ... (Optional): The elements to add to the array, beginning from the start index.
// Return Value:
// The splice() method returns an array containing the deleted elements, or an empty array if no elements are deleted.
let testSplice = [
  "Shahab",
  "Ghori",
  "Noman",
  "Hamza",
  "Khan",
  1,
  23,
  25,
  28,
  "1",
  "23",
  "25",
  "28",
];
console.log("\t\t\tLearning Splice");

console.log(testSplice);
console.log(testSplice.splice(0, 0, "added1", "added2"));
console.log(testSplice); // 0 start ki waja se shuru me add kiya or 0 remove/replace, last parameter me added krwaya
// added  appple, mango on start then lastthen middle
console.log(testSplice.splice(0, 0, "apple", "mango")); // added on start w/o removing
console.log(testSplice);

testSplice.splice(testSplice.length, 0, "last me add"); // lenght se wo last se add kryga..
console.log(testSplice);

console.log(testSplice.length);
testSplice.splice(8, 0, "middle added");
console.log(testSplice);

// removeing/ replaceing
// /removing
console.log(testSplice.splice(0, 2)); // remove krdya 2 indext ko 0 and 1 index ko meands apple , mango
console.log(testSplice);
// removing from last
testSplice.splice(testSplice.length - 2); // end se remove krwany k lye *** lenght -n *** krty hai..
console.log(testSplice);
// removing from middle
console.log(testSplice.length);
console.log(testSplice.splice(7, 2)); // 7 se start kiya or 7,8 yani 2index ko rmove kr diya khan and 1

// now replacing
console.log(testSplice);
// repalce 7,,8 index by lion and cat
console.log(testSplice.splice(7, 2, "lion", "cat"));
console.log(testSplice);

// slice on string
let myUser = "shahab Uddin Ghori"; // slice on string
console.log(myUser.slice(5, 12)); //b uddin output ayega means start index ko pic nhi kryga end ko kryga string ki..
console.log(myUser.slice(0, 12)); //b uddin output ayega means start index ko pic nhi kryga end ko kryga string ki..
// ** slice**  / ** splice** / **indexof** // ** lenght **   ***End***

////////////////////////////////////////   *** loops *** ///////////////////////////////////////
// for loop

// for (intialize; condition; increament/dereament){ source code }
for (let i = 1; i <= 12; i++) {
  // show counting 1 to 12
  console.log(i);
}
for (let i = 5; i < 51; i = i + 5) {
  // table of 5
  console.log(i);
}
for (let i = 50; i >= 5; i= i-5) { // revese table
  console.log(i);
}
// print odd num between 11 to 33
for ( let i = 11; i<=33; i=i+2){
    console.log(i);
}
// print odd num between 33 to 11
for ( let i =33; i>=11; i=i-2){
    console.log(i);
}
// even number b/w 44 to 68 
for ( let i =44; i<=68; i=i+2 ){
    console.log(i);
}for ( let i=68; i>=44; i=i-2 ){
    console.log(i);
}

// nested for loop

for(let i=1; i<=5; i++){
    let line=""
    for(let j = 1; j<=i; j++ ){
     line +=j;
    }
    console.log(line);
}
