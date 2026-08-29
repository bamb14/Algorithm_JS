-- 코드를 입력하세요
SELECT CAR_TYPE, COUNT(*)
FROM CAR_RENTAL_COMPANY_CAR
WHERE options LIKE '%통풍시트%'
OR options LIKE '%열선시트%'
OR options LIKE '%가죽시트%'
GROUP BY CAR_TYPE
ORDER BY CAR_TYPE;