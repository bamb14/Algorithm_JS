import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();

        int m = Integer.parseInt(br.readLine());
        int bit = 0;  // 집합을 비트로 표현

        for (int i = 0; i < m; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            String cmd = st.nextToken();

            if (cmd.equals("add")) {
                int x = Integer.parseInt(st.nextToken());
                bit |= (1 << x);

            } else if (cmd.equals("remove")) {
                int x = Integer.parseInt(st.nextToken());
                bit &= ~(1 << x);

            } else if (cmd.equals("check")) {
                int x = Integer.parseInt(st.nextToken());
                if ((bit & (1 << x)) != 0) {
                    sb.append("1\n");
                } else {
                    sb.append("0\n");
                }

            } else if (cmd.equals("toggle")) {
                int x = Integer.parseInt(st.nextToken());
                bit ^= (1 << x);

            } else if (cmd.equals("all")) {
                bit = (1 << 21) - 1;  // 1~20 모두 포함

            } else if (cmd.equals("empty")) {
                bit = 0;
            }
        }

        System.out.print(sb);
    }
}