Installations
1.	Install Xampp
    -	Download the xampp https://www.apachefriends.org/?utm_source=chatgpt.com
2.	Install PHP
    -	https://www.php.net/
3.	Install NodeJs
    -	https://nodejs.org/en/download

Setup Instructions
1.	Start Xampp 
    1.1	Open Xampp Control Panel
    1.2	Start the Apache and MySQL

2.	Clone the Github Repository
    2.1	Copy the link of Github Repository
    2.2	Open Visual Studio Code
    2.3	Find and click the Clone Git Repository
    2.4	Paste the link then save it to C: Xampp\htdocs\

3.	Import the Database file
    3.1	Look for the crud_system.sql file in the backend folder 
    3.2	Open http://localhost/phpmyadmin or click the “Admin” button in the xampp control panel beside the MySQL
    3.3	Look for Import button in the phpMyAdmin page
    3.4	Click Choose File and then select the crud_system.sql file and then click Import

4.	Install React
    4.1	Go to the Visual Studio Code
    4.2	Open the Folder Crud-PHP-React
    4.3	Look and find the frontend folder
    4.4	Click and Open the New Terminal
    4.5	Type cd frontend
    4.6	Then npm install, after that npm install axios
    4.7	Once the dependencies are already installed, type npm start
