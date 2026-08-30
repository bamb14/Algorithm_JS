-- 코드를 입력하세요
SELECT CONCAT('/home/grep/src/', board_id,'/', file_id, file_name, file_ext) AS FILE_PATH
FROM USED_GOODS_FILE
WHERE board_id = (
    SELECT board_id
    FROM USED_GOODS_BOARD 
    ORDER BY views DESC
    LIMIT 1
)
ORDER BY file_id DESC;

