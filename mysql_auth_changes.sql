ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'ewb2020';
flush privileges;
use mysql;
CREATE TABLE IF NOT EXISTS WATER_SAVED (
  id INT NOT NULL auto_increment PRIMARY KEY,
  entry_time DATETIME NOT NULL,
  water_amount DECIMAL NOT NULL
);
quit
