@ECHO off

REM This activates the virtual environment
CALL C:\Users\Will\Desktop\capstone\venv\Scripts\activate.bat

REM This changes directory to the fast-backend directory
CD "C:\Users\Will\Desktop\capstone\fast-backend"

REM This enters "manage.py runserver" in the fast-backend directory
python manage.py runserver