// String Compression: Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z).

// Gayel Laakmann McDowell(Feb 4, 2021) Cracking the Coding Interview; p. 91; 1.6 - String Compression

package main

import "fmt"

func main() {
	fmt.Println(stringCompression("aabcccccaaa")) // a2b1c5a3
}

func stringCompression(s string) string {
	if len(s) == 0 {
		return s
	}
	var ansArray []byte = make([]byte, 0)
	var count int = 1
	for i := 1; i <= len(s); i++ {
		if i == len(s) {
			ansArray = append(ansArray, s[i-1])
			ansArray = append(ansArray, byte(count+48))
			break
		}
		if s[i] == s[i-1] {
			count++
		} else {
			ansArray = append(ansArray, s[i-1])
			ansArray = append(ansArray, byte(count+48))
			count = 1
		}
	}
	if len(s) < len(ansArray) {
		return s
	} else {
		return string(ansArray)
	}
}
