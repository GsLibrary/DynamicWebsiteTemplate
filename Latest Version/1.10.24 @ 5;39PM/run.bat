@echo off

:Run-Process
cls
title GsLibrary Dynamic Website Template - Run Server
echo Starting the app...
echo.
cls
echo [SERVER] Press Any Key To Stop The Server.
echo.
start /b node server.js
pause > nul
echo.
taskkill /f /im node.exe
echo.
choice /c YN /m "Do you want to restart the server (Y/N)?"
if errorlevel 2 goto Exit-Process
if errorlevel 1 goto Run-Process

:Exit-Process
echo Server stopped. Exiting now...
timeout 5 >nul