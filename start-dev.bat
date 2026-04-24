@echo off
title Hey Brew Dark Roast — Dev Server
cd /d "%~dp0"

echo Starting Hey Brew Dark Roast dev server...
start "" cmd /k "npm run dev"

timeout /t 4 /nobreak >nul

start "" "chrome.exe" "http://localhost:3000"
