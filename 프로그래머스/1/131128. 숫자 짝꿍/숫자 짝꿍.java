import java.util.*;

class Solution {
    public String solution(String X, String Y) {
        String[] x=X.split("");
        String[] y=Y.split("");
        
        int[] arrX=new int[10];
        int[] arrY=new int[10];
        for(String n:x) arrX[Integer.parseInt(n)]++;
        for(String n:y) arrY[Integer.parseInt(n)]++;
        
        StringBuilder sb = new StringBuilder();
        
        for (int i = 9; i >= 0; i--) {
            int cnt = Math.min(arrX[i], arrY[i]);
            for (int j = 0; j < cnt; j++) {
                sb.append(i);
            }
        }

        if (sb.length() == 0) return "-1";          // 공통 숫자가 없을 경우
        if (sb.charAt(0) == '0') return "0";        // 0000 처럼 전부 0인 경우

        return sb.toString();
    }
}