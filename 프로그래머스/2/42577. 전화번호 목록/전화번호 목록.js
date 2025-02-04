function solution(phone_book) {
    phone_book.sort();  // 문자열 정렬 (O(N log N))

    for (let i = 0; i < phone_book.length - 1; i++) {
        if (phone_book[i + 1].startsWith(phone_book[i])) {
            return false;  // 앞 번호가 뒷 번호의 접두사인 경우
        }
    }

    return true;  // 접두사가 없는 경우
}
