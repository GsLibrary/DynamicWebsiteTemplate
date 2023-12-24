@echo off

:Installation-Process
title GsLibrary Dynamic Website Template - NodeJS Installation
echo Installing npm dependencies...
npm install
echo Dependencies installed.

set /p run=Run NodeJS Server Now? (Y/N):

if /I "%run%"=="Y" (
    echo Starting NodeJS Server...
    call run.bat
) else (
    echo Exiting installation.
)