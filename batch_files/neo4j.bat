@ECHO off

REM This activates the virtual environment
CALL C:\Users\Will\Desktop\capstone\venv\Scripts\activate.bat

REM This changes directory to the neo4j bin directory
CD "C:\neo4j\neo4j-community-4.4.5\bin"

REM This enters "neo4j console" in the neo4j bin directory
neo4j console