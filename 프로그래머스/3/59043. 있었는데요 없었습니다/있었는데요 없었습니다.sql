-- 코드를 입력하세요
SELECT I.animal_id, I.name
FROM animal_ins I
JOIN animal_outs O
ON I.animal_id = O.animal_id
WHERE I.DATETIME > O.DATETIME
ORDER BY I.DATETIME