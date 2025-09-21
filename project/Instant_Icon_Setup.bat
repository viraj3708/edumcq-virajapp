@echo off
echo 🎨 EduMCQ Instant Icon Setup
echo ============================
echo.
echo Creating desktop shortcut with built-in icon...
echo.

REM Create desktop shortcut pointing to EduMCQ_App.bat
echo Creating shortcut...

echo Set WshShell = WScript.CreateObject("WScript.Shell") > temp_shortcut.vbs
echo Set Shortcut = WshShell.CreateShortcut("%USERPROFILE%\Desktop\EduMCQ Learning.lnk") >> temp_shortcut.vbs
echo Shortcut.TargetPath = "%CD%\EduMCQ_App.bat" >> temp_shortcut.vbs
echo Shortcut.WorkingDirectory = "%CD%" >> temp_shortcut.vbs
echo Shortcut.Description = "EduMCQ Smart Learning Platform" >> temp_shortcut.vbs
echo Shortcut.Save >> temp_shortcut.vbs

cscript temp_shortcut.vbs >nul
del temp_shortcut.vbs >nul

if exist "%USERPROFILE%\Desktop\EduMCQ Learning.lnk" (
    echo ✅ SUCCESS! Desktop shortcut created!
    echo.
    echo 🚀 Your EduMCQ app now has:
    echo 📱 Desktop shortcut for easy access
    echo 🎯 Professional appearance
    echo ✨ One-click launch capability
    echo.
    echo Double-click "EduMCQ Learning" on your desktop to start!
) else (
    echo ❌ Failed to create shortcut
)

echo.
pause