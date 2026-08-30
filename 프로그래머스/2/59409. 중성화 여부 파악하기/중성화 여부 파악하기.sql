-- 코드를 입력하세요
SELECT animal_id, name,
    CASE
    WHEN SEX_UPON_INTAKE LIKE 'Neutered%'OR SEX_UPON_INTAKE LIKE 'Spayed%' THEN 'O'
    ELSE 'X'
    END AS 'intake'
FROM animal_ins
ORDER BY animal_id;