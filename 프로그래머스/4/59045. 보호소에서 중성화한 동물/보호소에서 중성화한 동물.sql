-- 코드를 입력하세요
SELECT I.animal_id, I.animal_type, I.name
FROM animal_ins I
JOIN animal_outs O
ON I.animal_id = O.animal_id
WHERE I.sex_upon_intake LIKE 'Intact%'
AND O.sex_upon_outcome NOT LIKE 'Intact%'
ORDER BY animal_id