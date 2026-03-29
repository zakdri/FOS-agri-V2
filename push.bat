@echo off
cd /d "C:\Users\Bold Pilot\Desktop\FOS Agri 2"
echo.
echo ====================================
echo   FOS-Agri V2 - GitHub Push Tool
echo ====================================
echo.
git add .
set /p msg="Enter commit message (or press Enter for 'update'): "
if "%msg%"=="" set msg=update
git commit -m "%msg%"
git push origin main
echo.
echo ====================================
echo   Done! Site updated at:
echo   https://zakdri.github.io/FOS-agri-V2/
echo ====================================
echo.
pause
