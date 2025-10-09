function solution(commands) {
  const SIZE = 51; // 1~50 사용
  const content = Array.from({ length: SIZE }, () => Array(SIZE).fill("EMPTY"));
  const merged = Array.from({ length: SIZE }, () => Array(SIZE));

  // 초기화: 각 셀은 자기 자신을 대표로 가짐
  for (let i = 1; i <= 50; i++) {
    for (let j = 1; j <= 50; j++) {
      merged[i][j] = [i, j];
    }
  }

  const getRoot = (r, c) => merged[r][c]; // [x, y]

  const samePair = (a, b) => a[0] === b[0] && a[1] === b[1];

  const setGroupRoot = (fromRoot, toRoot) => {
    // 대표가 fromRoot인 모든 셀의 대표를 toRoot로 변경
    for (let i = 1; i <= 50; i++) {
      for (let j = 1; j <= 50; j++) {
        const cur = merged[i][j];
        if (samePair(cur, fromRoot)) {
          merged[i][j] = [toRoot[0], toRoot[1]];
        }
      }
    }
  };

  const answer = [];

  for (const line of commands) {
    const parts = line.split(" ");

    if (parts[0] === "UPDATE") {
      if (parts.length === 4) {
        // UPDATE r c value
        const r = Number(parts[1]);
        const c = Number(parts[2]);
        const value = parts[3];
        const [x, y] = getRoot(r, c);
        content[x][y] = value;
      } else {
        // UPDATE value1 value2
        const v1 = parts[1];
        const v2 = parts[2];
        // 대표 좌표에만 의미가 있으므로 전체 content를 순회
        for (let i = 1; i <= 50; i++) {
          for (let j = 1; j <= 50; j++) {
            if (content[i][j] === v1) content[i][j] = v2;
          }
        }
      }
    }

    if (parts[0] === "MERGE") {
      const r1 = Number(parts[1]);
      const c1 = Number(parts[2]);
      const r2 = Number(parts[3]);
      const c2 = Number(parts[4]);

      const root1 = getRoot(r1, c1);
      const root2 = getRoot(r2, c2);

      // 이미 같은 그룹이면 스킵
      if (samePair(root1, root2)) continue;

      const [x1, y1] = root1;
      const [x2, y2] = root2;

      // 값 병합 규칙
      const v1 = content[x1][y1];
      const v2 = content[x2][y2];

      // 우선 root2 그룹을 root1으로 합침
      setGroupRoot(root2, root1);

      // 값 결정: 둘 다 비어있지 않으면 root1의 값 유지,
      // 한쪽만 값 있으면 그 값을 root1으로
      if (v1 === "EMPTY" && v2 !== "EMPTY") {
        content[x1][y1] = v2;
      }
      // root2 대표칸의 content는 더 이상 대표가 아니므로 초기화해도 무방
      content[x2][y2] = "EMPTY";
    }

    if (parts[0] === "UNMERGE") {
      const r = Number(parts[1]);
      const c = Number(parts[2]);

      const [x, y] = getRoot(r, c);
      const tmp = content[x][y];

      // 같은 그룹 모두 해제
      for (let i = 1; i <= 50; i++) {
        for (let j = 1; j <= 50; j++) {
          const cur = merged[i][j];
          if (samePair(cur, [x, y])) {
            merged[i][j] = [i, j]; // 자기 자신이 대표
            content[i][j] = "EMPTY";
          }
        }
      }
      // 선택 셀만 값 복원
      content[r][c] = tmp;
    }

    if (parts[0] === "PRINT") {
      const r = Number(parts[1]);
      const c = Number(parts[2]);
      const [x, y] = getRoot(r, c);
      answer.push(content[x][y]);
    }
  }

  return answer;
}
