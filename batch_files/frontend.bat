@ECHO off

REM This activates the virtual environment
CALL C:\Users\Will\Desktop\capstone\venv\Scripts\activate.bat

REM This changes directory to the fast-frontend\frontend directory
CD "C:\Users\Will\Desktop\capstone\fast-frontend\frontend"

REM This enters "npm run start" in the fast-frontend/frontend directory
npm run start