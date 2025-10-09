function solution(cap, n, deliveries, pickups) {
  let answer = 0;
  let d = 0, p = 0;

  for (let i = n - 1; i >= 0; i--) {
    d += deliveries[i];
    p += pickups[i];
    if (d === 0 && p === 0) continue;

    const trips = Math.max(Math.ceil(d / cap), Math.ceil(p / cap));
    answer += (i + 1) * 2 * trips;

    d -= trips * cap;
    p -= trips * cap;
  }
  return answer;
}
