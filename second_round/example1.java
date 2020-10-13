public class example1 {
    public static void main(String[] args) {
        int[] arr = { 2, 7, 11, 15 };
        int target = 17;
        getSolution(arr, target);
    }

    static void getSolution(int[] arr, int target) {
        // int flag = 0;
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr.length; j++) {
                if (i != j) {
                    if (target == sum(arr[i], arr[j])) {
                        System.out.println(arr[i] + " " + arr[j]);
                        System.out.println("[" + i + "," + j + "]");
                        return;
                    }
                }
            }
        }
        System.out.println("does not exist");

    }

    static int sum(int a, int b) {
        return a + b;
    }
}
