SELECT COUNT(*) AS fish_count
FROM fish_info I
JOIN fish_name_info N
ON I.fish_type = N.fish_type
WHERE N.fish_name IN ('BASS', 'SNAPPER');