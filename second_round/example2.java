import java.util.Arrays;

public class example2 {
    public static void main(String[] args) {
        String str1 = "earth";
        String str2 = "heart";
        if (sort(str1).equals(sort(str2))) {
            System.out.println("Anagram");
        } else {
            System.out.println("Not an anagram");
        }
    }

    static String sort(String str) {
        String arr[] = str.split("");

        // Sorts arr[] in ascending order
        Arrays.sort(arr);
        StringBuffer sb = new StringBuffer();
        for (int i = 0; i < arr.length; i++) {
            sb.append(arr[i]);
        }
        return sb.toString();
        // System.out.println(str1);
    }

}
