import java.util.*;

class Solution {
    public int solution(int n, int[] lost, int[] reserve) {
        int answer = n;
        Arrays.sort(lost);
        Arrays.sort(reserve);

        // 1. 리스트로 변환
        List<Integer> listLost = new ArrayList<>();
        List<Integer> listReserve = new ArrayList<>();

        for (int l : lost) listLost.add(l);
        for (int r : reserve) listReserve.add(r);

        // 2. 중복 제거 (도난 + 여벌 둘 다 있는 경우)
        List<Integer> tempLost = new ArrayList<>(listLost);
        for (int student : tempLost) {
            if (listReserve.contains(student)) {
                listReserve.remove(Integer.valueOf(student));
                listLost.remove(Integer.valueOf(student));
            }
        }

        // 3. 체육복 빌리기
        for (int student : listLost) {
            if (listReserve.contains(student - 1)) {
                listReserve.remove(Integer.valueOf(student - 1));
            } else if (listReserve.contains(student + 1)) {
                listReserve.remove(Integer.valueOf(student + 1));
            } else {
                answer--; // 못 빌렸음
            }
        }

        return answer;
    }
}
