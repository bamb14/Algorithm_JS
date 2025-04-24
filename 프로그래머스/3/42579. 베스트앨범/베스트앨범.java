import java.util.*;

class Solution {
    public int[] solution(String[] genres, int[] plays) {
        Map<String, Integer> totalPlays = new HashMap<>();
        Map<String, List<Integer>> genreToIndices = new HashMap<>();

        for (int i = 0; i < genres.length; i++) {
            totalPlays.put(genres[i], totalPlays.getOrDefault(genres[i], 0) + plays[i]);
            genreToIndices.computeIfAbsent(genres[i], k -> new ArrayList<>()).add(i);
        }

        // 장르를 총 재생 수 기준으로 정렬
        List<String> sortedGenres = new ArrayList<>(totalPlays.keySet());
        sortedGenres.sort((a, b) -> totalPlays.get(b) - totalPlays.get(a));

        List<Integer> answerList = new ArrayList<>();

        for (String genre : sortedGenres) {
            List<Integer> songs = genreToIndices.get(genre);

            // 곡 인덱스를 재생 수 기준으로 정렬, 같으면 인덱스 오름차순
            songs.sort((a, b) -> {
                if (plays[b] != plays[a]) return plays[b] - plays[a];
                return a - b;
            });

            // 최대 2곡 추가
            for (int i = 0; i < Math.min(2, songs.size()); i++) {
                answerList.add(songs.get(i));
            }
        }

        return answerList.stream().mapToInt(i -> i).toArray();
    }
}
