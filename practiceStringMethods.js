//Your goal is to create a function that
// removes the first and last characters of a
// string. You're given one parameter, the
// original string. You don't have to worry with
// strings with less than two characters.

let str = "I is the first and T is the last"
function poop (){
  return str.slice( 1, str.length- 1 )
}
console.log(poop())

// Create a function that alternates the
// case of a given string.



function swapCase(str) {
    return str.split('').map((a,b) =>
        b % 2 == 0 ? a.toLowerCase() : a.toUpperCase()
    ).join('');
}

console.log(swapCase("resilient coders"))


// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!
// Ex. Input: "aa", "bb" , "cc" => Output: "abcabc"
// Ex. Input: "qwe", "kcx" , "hwq" => Output: "qkhwcwexq"
// Note: You can expect all of the inputs to be the same length.


function conGato(str1, str2, str3) {
  let result = '';
  str1 = str1.split('');
  str2 = str2.split('');
  sr3 = str3.split('');

  for (let i = 0; i < str1.length; i++) {
    result += str1[i] + str2[i] + str3[i];

  }
  return result
}
console.log(conGato('aa', 'bb', 'cc'))


// You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
// The returned value must be a string, and have "***" between each of its letters.
// You should not remove or add elements from/to the array.
// Test.assertEquals(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' );
// Test.assertEquals(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e');
// https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/javascript

function twoSort(s) {
  return s.sort()[0].split('').join('***');
}
