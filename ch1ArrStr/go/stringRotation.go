//  String Rotation: Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring (e.g., "waterbottle" is a rotation of "erbottlewat").

// Gayel Laakmann McDowell(Feb 4, 2021) Cracking the Coding Interview; p. 91; 1.9 - String Rotation

package main

import "fmt"

func main() {
	fmt.Println(isSubstring("waterbottle", "erbottlewat"))  // true
	fmt.Println(isSubstring("waterbottle", "erbottlewatt")) // false
}

func isSubstring(s1, s2 string) bool {
	s1H := map[byte]int{}
	s2H := map[byte]int{}
	if len(s1) != len(s2) {
		return false
	}
	for i := 0; i < len(s1); i++ {
		if val, isMapContainsKey := s1H[s1[i]]; isMapContainsKey {
			val++
		} else {
			s1H[s1[i]] = 1
		}
	}
	for i := 0; i < len(s2); i++ {
		if val, isMapContainsKey := s2H[s2[i]]; isMapContainsKey {
			val++
		} else {
			s2H[s2[i]] = 1
		}
	}
	for key, val := range s1H {
		_, ok := s2H[key]
		if !ok || val != s2H[key] {
			return false
		}
	}
	return true
}
