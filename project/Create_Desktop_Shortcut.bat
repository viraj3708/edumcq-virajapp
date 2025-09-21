@echo off
echo 🎓 EduMCQ - Desktop Shortcut Creator
echo ==================================
echo.

set SHORTCUT_NAME=EduMCQ Smart Learning Platform
set TARGET_PATH=%~dp0index.html
set ICON_PATH=%~dp0EduMCQ.ico.png

echo Creating desktop shortcut...
echo Set oWS = WScript.CreateObject("WScript.Shell") > CreateShortcut.vbs
echo sDesktopPath = oWS.SpecialFolders("Desktop") >> CreateShortcut.vbs
echo Set oShortcut = oWS.CreateShortcut(sDesktopPath ^& "\%SHORTCUT_NAME%.lnk") >> CreateShortcut.vbs
echo oShortcut.TargetPath = "%TARGET_PATH%" >> CreateShortcut.vbs
echo oShortcut.IconLocation = "%ICON_PATH%" >> CreateShortcut.vbs
echo oShortcut.WindowStyle = 1 >> CreateShortcut.vbs
echo oShortcut.Save >> CreateShortcut.vbs
echo Set oShortcut = Nothing >> CreateShortcut.vbs
echo Set oWS = Nothing >> CreateShortcut.vbs

cscript CreateShortcut.vbs
del CreateShortcut.vbs

echo.
echo ✅ Desktop shortcut created successfully!
echo Look for "%SHORTCUT_NAME%" on your desktop
echo.
pause