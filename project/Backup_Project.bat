@echo off
echo 🎓 EduMCQ - Project Backup Tool
echo ===============================
echo.

set BACKUP_DIR=%USERPROFILE%\Desktop\EduMCQ_Backup_%date:~-4,4%%date:~-10,2%%date:~-7,2%_%time:~0,2%%time:~3,2%%time:~6,2%
set BACKUP_DIR=%BACKUP_DIR: =0%

echo Creating backup in: %BACKUP_DIR%
mkdir "%BACKUP_DIR%"

echo.
echo Copying project files...
xcopy "%~dp0*" "%BACKUP_DIR%" /E /I /H /Y

echo.
echo Backup completed successfully!
echo Your project has been backed up to: %BACKUP_DIR%
echo.
echo 💡 TIP: Keep this backup in a safe location
echo.
pause