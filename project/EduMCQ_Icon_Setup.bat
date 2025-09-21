@echo off
echo Setting up EduMCQ App Icon...

REM Check if icon file exists
if not exist "EduMCQ.ico" (
    echo ❌ EduMCQ.ico not found!
    echo.
    echo Please first:
    echo 1. Create or download an icon file
    echo 2. Name it "EduMCQ.ico"
    echo 3. Put it in this folder
    echo 4. Run this script again
    echo.
    pause
    exit
)

echo ✅ EduMCQ.ico found!
echo.
echo Creating desktop shortcut with icon...

REM Create VBS script to make shortcut with icon
echo Set WshShell = WScript.CreateObject("WScript.Shell") > temp_shortcut.vbs
echo Set Shortcut = WshShell.CreateShortcut("%USERPROFILE%\Desktop\EduMCQ Learning.lnk") >> temp_shortcut.vbs
echo Shortcut.TargetPath = "%CD%\EduMCQ_App.bat" >> temp_shortcut.vbs
echo Shortcut.WorkingDirectory = "%CD%" >> temp_shortcut.vbs
echo Shortcut.IconLocation = "%CD%\EduMCQ.ico" >> temp_shortcut.vbs
echo Shortcut.Description = "EduMCQ Smart Learning Platform" >> temp_shortcut.vbs
echo Shortcut.Save >> temp_shortcut.vbs

REM Run the VBS script
cscript temp_shortcut.vbs >nul

REM Clean up
del temp_shortcut.vbs

echo.
echo 🎉 SUCCESS! 
echo.
echo ✅ Desktop shortcut created with custom icon
echo ✅ Icon: EduMCQ.ico applied
echo ✅ Ready to use!
echo.
echo Your EduMCQ app now has:
echo 📱 Custom icon on desktop
echo 🚀 Professional appearance
echo 🎯 Easy one-click access
echo.
echo Double-click the "EduMCQ Learning" icon on your desktop!
echo.
pause