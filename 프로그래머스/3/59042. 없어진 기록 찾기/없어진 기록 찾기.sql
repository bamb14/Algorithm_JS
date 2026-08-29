-- 코드를 입력하세요
SELECT animal_id, name
FROM animal_outs O
WHERE NOT EXISTS(
    SELECT 1
    FROM animal_ins I
    WHERE O.animal_id = I.animal_id
)
ORDER BY animal_id;