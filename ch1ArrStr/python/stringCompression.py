# String Compression: Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z).


# Gayel Laakmann McDowell(Feb 4, 2021) Cracking the Coding Interview; p. 91; 1.6 - String Compression



def stringCompression(s, count=1, compressedStr=""):
    if len(s) == 0: return s
    for i in range(len(s)):
        if i != len(s) - 1:
            if s[i] == s[i + 1]:
                count += 1
            else:
                compressedStr += s[i] + str(count)
                count = 1
        else:
            compressedStr += s[i] + str(count)
    return compressedStr if len(compressedStr) < len(s) else s



print(stringCompression("aabcccccaaa")) # a2b1c5a3
