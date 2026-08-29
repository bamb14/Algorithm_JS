-- 코드를 작성해주세요
SELECT A.id, COUNT(B.id) AS child_count
FROM ecoli_data A
LEFT JOIN ecoli_data B
ON A.id = B.parent_id
GROUP BY A.id
ORDER BY A.id;