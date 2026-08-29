-- 코드를 입력하세요
SELECT A.FOOD_TYPE, A.rest_id, A.rest_name, A.FAVORITES
FROM rest_info A
JOIN (
    SELECT food_type, MAX(FAVORITES) AS FAVORITES
    FROM rest_info
    GROUP BY food_type
) B
ON A.food_type = B.food_type
AND A.FAVORITES = B.FAVORITES
ORDER BY food_type DESC;