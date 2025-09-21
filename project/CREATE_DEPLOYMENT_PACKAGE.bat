@echo off
echo === EduMCQ - GitHub Pages Deployment Helper ===
echo ==============================================
echo.

echo 🎓 STEP 1: PREPARING YOUR DEPLOYMENT PACKAGE
echo =============================================

set TEMP_DIR=%TEMP%\edumcq_deployment
set ZIP_FILE=%USERPROFILE%\Desktop\edumcq_github_deployment.zip

echo Creating temporary directory...
if exist "%TEMP_DIR%" rmdir /s /q "%TEMP_DIR%"
mkdir "%TEMP_DIR%"

echo Copying essential files for GitHub Pages...
xcopy "%~dp0index.html" "%TEMP_DIR%\" /Y
xcopy "%~dp0app.js" "%TEMP_DIR%\" /Y
xcopy "%~dp0data.js" "%TEMP_DIR%\" /Y
xcopy "%~dp0style.css" "%TEMP_DIR%\" /Y
xcopy "%~dp0manifest.json" "%TEMP_DIR%\" /Y
xcopy "%~dp0sw.js" "%TEMP_DIR%\" /Y
xcopy "%~dp0EduMCQ.ico.png" "%TEMP_DIR%\" /Y

echo Creating deployment instructions...
echo EduMCQ - GitHub Pages Deployment Instructions > "%TEMP_DIR%\DEPLOYMENT_INSTRUCTIONS.txt"
echo =============================================== >> "%TEMP_DIR%\DEPLOYMENT_INSTRUCTIONS.txt"
echo. >> "%TEMP_DIR%\DEPLOYMENT_INSTRUCTIONS.txt"
echo FOLLOW THESE STEPS TO DEPLOY YOUR EDUMCQ APP: >> "%TEMP_DIR%\DEPLOYMENT_INSTRUCTIONS.txt"
echo. >> "%TEMP_DIR%\DEPLOYMENT_INSTRUCTIONS.txt"
echo 1. Go to https://github.com and sign up for a free account >> "%TEMP_DIR%\DEPLOYMENT_INSTRUCTIONS.txt"
echo 2. Create a new repository named "edumcq-app" >> "%TEMP_DIR%\DEPLOYMENT_INSTRUCTIONS.txt"
echo 3. Make the repository PUBLIC >> "%TEMP_DIR%\DEPLOYMENT_INSTRUCTIONS.txt"
echo 4. Click "uploading an existing file" >> "%TEMP_DIR%\DEPLOYMENT_INSTRUCTIONS.txt"
echo 5. Drag and drop ALL files from this zip folder >> "%TEMP_DIR%\DEPLOYMENT_INSTRUCTIONS.txt"
echo 6. Click "Commit changes" >> "%TEMP_DIR%\DEPLOYMENT_INSTRUCTIONS.txt"
echo 7. Go to Settings ^> Pages >> "%TEMP_DIR%\DEPLOYMENT_INSTRUCTIONS.txt"
echo 8. Set source to "Deploy from a branch" >> "%TEMP_DIR%\DEPLOYMENT_INSTRUCTIONS.txt"
echo 9. Select "main" branch and "/" folder >> "%TEMP_DIR%\DEPLOYMENT_INSTRUCTIONS.txt"
echo 10. Click "Save" >> "%TEMP_DIR%\DEPLOYMENT_INSTRUCTIONS.txt"
echo 11. Wait 5-10 minutes for deployment >> "%TEMP_DIR%\DEPLOYMENT_INSTRUCTIONS.txt"
echo 12. Your website will be at: https://YOUR_USERNAME.github.io/edumcq-app >> "%TEMP_DIR%\DEPLOYMENT_INSTRUCTIONS.txt"
echo. >> "%TEMP_DIR%\DEPLOYMENT_INSTRUCTIONS.txt"
echo For detailed instructions, see: GITHUB_PAGES_SETUP.txt >> "%TEMP_DIR%\DEPLOYMENT_INSTRUCTIONS.txt"

echo Creating zip package...
if exist "%ZIP_FILE%" del "%ZIP_FILE%"
powershell -command "Add-Type -AssemblyName System.IO.Compression.FileSystem; [System.IO.Compression.ZipFile]::CreateFromDirectory('%TEMP_DIR%', '%ZIP_FILE%')"

echo Cleaning up...
rmdir /s /q "%TEMP_DIR%"

echo.
echo ✅ DEPLOYMENT PACKAGE READY!
echo ==========================
echo.
echo Your deployment package has been created:
echo %ZIP_FILE%
echo.
echo INSTRUCTIONS:
echo 1. Extract this zip file
echo 2. Follow the steps in DEPLOYMENT_INSTRUCTIONS.txt
echo 3. Upload all files to your GitHub repository
echo.
echo For complete setup guide, see: GITHUB_PAGES_SETUP.txt
echo For verification guide, see: GITHUB_PAGES_VERIFICATION.txt
echo.
pause