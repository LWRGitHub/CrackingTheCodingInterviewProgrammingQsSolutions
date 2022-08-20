// String Compression: Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z).


// Gayel Laakmann McDowell(Feb 4, 2021) Cracking the Coding Interview; p. 91; 1.6 - String Compression


public class stringCompression {
    public static void main(String[] args) {
        String str = "aabcccccaaa";
        System.out.println(compress(str)); // a2b1c5a3
    }

    public static String compress(String str) {
        int count = 0;
        String compressed = "";
        if (str.length() == 0) return str;
        for (int i = 0; i < str.length(); i++) {
            count++;
            if (i + 1 >= str.length() || str.charAt(i) != str.charAt(i + 1)) {
                compressed += "" + str.charAt(i) + count;
                count = 0;
            }
        }
        return compressed.length() < str.length() ? compressed : str;
    }
}




