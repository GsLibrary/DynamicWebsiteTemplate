@echo off

:Installation-Process
title GsLibrary Dynamic Website Template - NodeJS Installation
echo Installing npm dependencies...
call npm install
echo Dependencies installed.

IF EXIST ".env" (
    REM File exists, skip this part
) ELSE (
    echo SECRET_SESSION = %random% > .env
)

IF EXIST "public\delete-me" (
    del "public\delete-me" /Q
) ELSE (
    REM File exists, skip this part
)

timeout 3 >nul
goto Choice-Process

:Choice-Process
cls
choice /c YN /m "Run NodeJS Server Now"
if errorlevel 2 goto Exit-Process
if errorlevel 1 goto Start-Process

:Start-Process
cls
echo Starting NodeJS Server...
call run.bat
exit

:Exit-Process
cls
echo Exiting installation.
timeout 3 >nul
exit