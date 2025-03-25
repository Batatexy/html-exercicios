CREATE TABLE ESTOQUE
(
	ID INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    ID_PRODUTO INT,
    MATERIAL_ID INT,
    QUANTIDADE INT,
    DATA_ATUALIZACAO DATETIME
);


START TRANSACTION;
BEGIN
    INSERT INTO estoque () VALUES (1, 1 1, 50, 15-10-2024);

    UPDATE estoque 
    SET quantidade = quantidade + 50
    WHERE id_produto = 1;
    
    COMMIT;
END;

ROLLBACK;




