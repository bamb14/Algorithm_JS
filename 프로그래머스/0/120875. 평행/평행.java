class Solution {
    public int solution(int[][] dots) {
        if (isParallel(dots[0], dots[1], dots[2], dots[3])) return 1;
        if (isParallel(dots[0], dots[2], dots[1], dots[3])) return 1;
        if (isParallel(dots[0], dots[3], dots[1], dots[2])) return 1;
        return 0;
    }

    private boolean isParallel(int[] a1, int[] a2, int[] b1, int[] b2) {
        int dx1 = a2[0] - a1[0];
        int dy1 = a2[1] - a1[1];
        int dx2 = b2[0] - b1[0];
        int dy2 = b2[1] - b1[1];

        // dy1/dx1 == dy2/dx2 → cross multiplication
        return dy1 * dx2 == dy2 * dx1;
    }
}
