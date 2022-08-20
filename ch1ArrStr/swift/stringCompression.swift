// String Compression: Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z).


// Gayel Laakmann McDowell(Feb 4, 2021) Cracking the Coding Interview; p. 91; 1.6 - String Compression



func stringCompression(_ str: String) -> String {
    var compressedString = ""
    var currentChar = str.first!
    var currentCharCount = 0
    for char in str {
        if char == currentChar {
            currentCharCount += 1
        } else {
            compressedString.append("\(currentChar)\(currentCharCount)")
            currentChar = char
            currentCharCount = 1
        }
    }
    compressedString.append("\(currentChar)\(currentCharCount)")
    return compressedString.count < str.count ? compressedString : str
}

print(stringCompression("aabcccccaaa")) // a2b1c5a3