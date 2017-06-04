# Simple backend for dictionary

Database structure:
    
Table: word
+-------------+------------------+------+-----+---------+----------------+
| Field       | Type             | Null | Key | Default | Extra          |
+-------------+------------------+------+-----+---------+----------------+
| id          | int(10) unsigned | NO   | PRI | NULL    | auto_increment |
| term        | varchar(255)     | NO   |     | NULL    |                |
| translation | varchar(255)     | NO   |     | NULL    |                |
+-------------+------------------+------+-----+---------+----------------+