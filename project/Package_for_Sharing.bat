@echo off
echo 🎓 EduMCQ - Package for Sharing
echo ==============================
echo.

set PACKAGE_NAME=EduMCQ_Smart_Learning_Platform
set TEMP_DIR=%TEMP%\%PACKAGE_NAME%
set OUTPUT_DIR=%USERPROFILE%\Desktop\%PACKAGE_NAME%_Package

echo Creating package directory...
if exist "%TEMP_DIR%" rmdir /s /q "%TEMP_DIR%"
mkdir "%TEMP_DIR%"

echo Copying essential files...
xcopy "%~dp0index.html" "%TEMP_DIR%\" /Y
xcopy "%~dp0app.js" "%TEMP_DIR%\" /Y
xcopy "%~dp0data.js" "%TEMP_DIR%\" /Y
xcopy "%~dp0style.css" "%TEMP_DIR%\" /Y
xcopy "%~dp0manifest.json" "%TEMP_DIR%\" /Y
xcopy "%~dp0sw.js" "%TEMP_DIR%\" /Y
xcopy "%~dp0EduMCQ.ico.png" "%TEMP_DIR%\" /Y

echo Creating launch instructions...
echo 🎓 EduMCQ - Smart Learning Platform
echo ==================================
echo.
echo INSTRUCTIONS:
echo 1. Extract all files to a folder
echo 2. Double-click "index.html" to start the application
echo 3. No installation required - works offline
echo.
echo FEATURES:
echo - Interactive MCQs with instant feedback
echo - Video learning content
echo - Chapter summaries
echo - Progress tracking
echo - Mobile responsive design
echo - Dark mode support
echo.
echo Happy Learning! 📚✨
> "%TEMP_DIR%\README.txt"

echo Creating batch launcher...
echo @echo off
echo start "" "index.html"
> "%TEMP_DIR%\Launch_EduMCQ.bat"

echo Creating zip package...
if exist "%OUTPUT_DIR%.zip" del "%OUTPUT_DIR%.zip"
powershell -command "Add-Type -AssemblyName System.IO.Compression.FileSystem; [System.IO.Compression.ZipFile]::CreateFromDirectory('%TEMP_DIR%', '%OUTPUT_DIR%.zip')"

echo Cleaning up...
rmdir /s /q "%TEMP_DIR%"

echo.
echo ✅ Package created successfully!
echo Package location: %OUTPUT_DIR%.zip
echo Share this zip file with friends and students
echo.
pause