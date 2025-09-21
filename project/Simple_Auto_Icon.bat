@echo off
echo 🎨 EduMCQ Simple Auto Icon Creator
echo ==================================
echo.
echo Creating custom icon and desktop shortcut automatically...
echo.

REM Step 1: Create a simple HTML file to generate icon screenshot
echo Creating icon preview...

echo ^<!DOCTYPE html^> > temp_icon.html
echo ^<html^>^<head^>^<style^> >> temp_icon.html
echo body{margin:0;display:flex;align-items:center;justify-content:center;height:100vh;background:linear-gradient(135deg,#667eea,#764ba2);font-family:Arial,sans-serif;} >> temp_icon.html
echo .icon{width:256px;height:256px;background:linear-gradient(135deg,#667eea,#764ba2);border-radius:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;color:white;font-weight:bold;text-align:center;box-shadow:0 20px 40px rgba(0,0,0,0.3);border:8px solid white;} >> temp_icon.html
echo .text1{font-size:48px;margin-bottom:10px;text-shadow:0 4px 8px rgba(0,0,0,0.3);} >> temp_icon.html
echo .text2{font-size:36px;text-shadow:0 4px 8px rgba(0,0,0,0.3);} >> temp_icon.html
echo .emoji{font-size:60px;margin-bottom:15px;} >> temp_icon.html
echo ^</style^>^</head^>^<body^> >> temp_icon.html
echo ^<div class="icon"^>^<div class="emoji"^>📚^</div^>^<div class="text1"^>EDU^</div^>^<div class="text2"^>MCQ^</div^>^</div^> >> temp_icon.html
echo ^</body^>^</html^> >> temp_icon.html

REM Step 2: Create PowerShell script to capture and create icon
echo Creating PowerShell icon generator...

echo Add-Type -AssemblyName System.Drawing > create_icon.ps1
echo Add-Type -AssemblyName System.Windows.Forms >> create_icon.ps1
echo. >> create_icon.ps1
echo # Create a simple bitmap icon >> create_icon.ps1
echo $bitmap = New-Object System.Drawing.Bitmap(256, 256) >> create_icon.ps1
echo $graphics = [System.Drawing.Graphics]::FromImage($bitmap) >> create_icon.ps1
echo $graphics.SmoothingMode = 'AntiAlias' >> create_icon.ps1
echo $graphics.TextRenderingHint = 'AntiAlias' >> create_icon.ps1
echo. >> create_icon.ps1
echo # Create gradient background >> create_icon.ps1
echo $brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush([System.Drawing.Point]::new(0,0), [System.Drawing.Point]::new(256,256), [System.Drawing.Color]::FromArgb(102,126,234), [System.Drawing.Color]::FromArgb(118,75,162)) >> create_icon.ps1
echo $graphics.FillRectangle($brush, 0, 0, 256, 256) >> create_icon.ps1
echo. >> create_icon.ps1
echo # Add rounded corners effect >> create_icon.ps1
echo $cornerBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(240,240,240)) >> create_icon.ps1
echo $graphics.FillRectangle($cornerBrush, 0, 0, 20, 20) >> create_icon.ps1
echo $graphics.FillRectangle($cornerBrush, 236, 0, 20, 20) >> create_icon.ps1
echo $graphics.FillRectangle($cornerBrush, 0, 236, 20, 20) >> create_icon.ps1
echo $graphics.FillRectangle($cornerBrush, 236, 236, 20, 20) >> create_icon.ps1
echo. >> create_icon.ps1
echo # Add text >> create_icon.ps1
echo $font1 = New-Object System.Drawing.Font('Arial', 32, [System.Drawing.FontStyle]::Bold) >> create_icon.ps1
echo $font2 = New-Object System.Drawing.Font('Arial', 24, [System.Drawing.FontStyle]::Bold) >> create_icon.ps1
echo $textBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White) >> create_icon.ps1
echo. >> create_icon.ps1
echo # Draw book emoji (simplified as rectangle) >> create_icon.ps1
echo $bookBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255,255,255)) >> create_icon.ps1
echo $graphics.FillRectangle($bookBrush, 108, 60, 40, 30) >> create_icon.ps1
echo $graphics.DrawString('📚', $font1, $textBrush, 110, 55) >> create_icon.ps1
echo. >> create_icon.ps1
echo # Draw text >> create_icon.ps1
echo $graphics.DrawString('EDU', $font1, $textBrush, 98, 130) >> create_icon.ps1
echo $graphics.DrawString('MCQ', $font2, $textBrush, 100, 170) >> create_icon.ps1
echo. >> create_icon.ps1
echo # Save as PNG first >> create_icon.ps1
echo $bitmap.Save('EduMCQ_temp.png', [System.Drawing.Imaging.ImageFormat]::Png) >> create_icon.ps1
echo. >> create_icon.ps1
echo # Create ICO file >> create_icon.ps1
echo $icon = [System.Drawing.Icon]::FromHandle($bitmap.GetHicon()) >> create_icon.ps1
echo $fileStream = [System.IO.File]::Create('EduMCQ.ico') >> create_icon.ps1
echo $icon.Save($fileStream) >> create_icon.ps1
echo $fileStream.Close() >> create_icon.ps1
echo. >> create_icon.ps1
echo # Cleanup >> create_icon.ps1
echo $graphics.Dispose() >> create_icon.ps1
echo $bitmap.Dispose() >> create_icon.ps1
echo $brush.Dispose() >> create_icon.ps1
echo $cornerBrush.Dispose() >> create_icon.ps1
echo $bookBrush.Dispose() >> create_icon.ps1
echo $font1.Dispose() >> create_icon.ps1
echo $font2.Dispose() >> create_icon.ps1
echo $textBrush.Dispose() >> create_icon.ps1
echo $icon.Dispose() >> create_icon.ps1

REM Step 3: Run PowerShell script
echo Generating icon file...
powershell -ExecutionPolicy Bypass -File create_icon.ps1

if exist "EduMCQ.ico" (
    echo ✅ Icon created successfully!
    echo.
    
    REM Step 4: Create desktop shortcut with icon
    echo Creating desktop shortcut with custom icon...
    
    echo Set WshShell = WScript.CreateObject("WScript.Shell") > create_shortcut.vbs
    echo Set Shortcut = WshShell.CreateShortcut("%USERPROFILE%\Desktop\EduMCQ Learning.lnk") >> create_shortcut.vbs
    echo Shortcut.TargetPath = "%CD%\EduMCQ_App.bat" >> create_shortcut.vbs
    echo Shortcut.WorkingDirectory = "%CD%" >> create_shortcut.vbs
    echo Shortcut.IconLocation = "%CD%\EduMCQ.ico" >> create_shortcut.vbs
    echo Shortcut.Description = "EduMCQ Smart Learning Platform" >> create_shortcut.vbs
    echo Shortcut.Save >> create_shortcut.vbs
    
    cscript create_shortcut.vbs >nul
    
    if exist "%USERPROFILE%\Desktop\EduMCQ Learning.lnk" (
        echo ✅ Desktop shortcut created with custom icon!
        echo.
        echo 🎉 SUCCESS! Everything completed automatically!
        echo.
        echo ✅ Custom icon created (EduMCQ.ico)
        echo ✅ Desktop shortcut created with beautiful icon
        echo ✅ Professional app appearance ready
        echo.
        echo 🚀 Your EduMCQ app now has:
        echo 📱 Beautiful gradient icon with book emoji
        echo 🎯 Professional branded appearance  
        echo ✨ One-click access from desktop
        echo 🖥️ Looks like real desktop software
        echo.
        echo Double-click "EduMCQ Learning" on your desktop to start!
        echo.
    ) else (
        echo ❌ Failed to create desktop shortcut
    )
    
    REM Cleanup temporary files
    del temp_icon.html >nul 2>&1
    del create_icon.ps1 >nul 2>&1
    del create_shortcut.vbs >nul 2>&1
    del EduMCQ_temp.png >nul 2>&1
    
) else (
    echo ❌ Failed to create icon file
    echo This might happen if PowerShell has restrictions
    echo Try running as administrator or check PowerShell settings
)

echo.
echo 📋 What was created:
if exist "EduMCQ.ico" echo ✅ EduMCQ.ico - Your custom app icon
if exist "%USERPROFILE%\Desktop\EduMCQ Learning.lnk" echo ✅ Desktop shortcut with icon
echo.
pause