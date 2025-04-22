import java.util.*;

class Solution {
    public int solution(int[] array) {
        HashMap<Integer, Integer> map = new HashMap<>();

        for (int num : array) {
            map.put(num, map.getOrDefault(num, 0) + 1);
        }

        int maxKey = -1;
        int maxFreq = 0;
        boolean multi = false;

        for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
            int key = entry.getKey();
            int freq = entry.getValue();

            if (freq > maxFreq) {
                maxFreq = freq;
                maxKey = key;
                multi = false;
            } else if (freq == maxFreq && key != maxKey) {
                multi = true;
            }
        }

        return multi ? -1 : maxKey;
    }
}
