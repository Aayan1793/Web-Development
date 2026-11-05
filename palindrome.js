function checkPalindrome() {
    var word = document.getElementById("word").value;

    var reverse = word.split("").reverse().join("");

    if (word.toLowerCase() == reverse.toLowerCase()) {
        document.getElementById("result").innerHTML = word + "is a Palindrome";
    }
    else {
        document.getElementById("result").innerHTML = word + "is not a Palindrome";
    }
}