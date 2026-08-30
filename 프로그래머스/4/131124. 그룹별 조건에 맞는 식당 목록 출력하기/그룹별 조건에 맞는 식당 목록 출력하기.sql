-- 코드를 입력하세요
SELECT MEMBER_NAME, REVIEW_TEXT, REVIEW_DATE
FROM (
    SELECT M.member_id, M.member_name, COUNT(*) AS cnt
    FROM MEMBER_PROFILE M
    JOIN REST_REVIEW R
    ON M.member_id = R.member_id
    GROUP BY M.member_id
    ORDER BY cnt DESC
    LIMIT 1
) T
JOIN REST_REVIEW R
ON T.member_id = R.member_id
ORDER BY REVIEW_DATE, REVIEW_TEXT

