SELECT A.ID, B.fish_name, M.max_length
FROM fish_info A
JOIN fish_name_info B
ON A.fish_type=B.fish_type
JOIN (
    SELECT fish_type, MAX(length) as MAX_LENGTH
    FROM fish_info
    GROUP BY fish_type
) AS M
ON B.fish_type=M.fish_type
AND A.length=M.max_length
ORDER BY A.id;