@echo off
echo 🎨 EduMCQ Automatic Icon Creator
echo ================================
echo.
echo Creating and applying icon automatically...
echo.

REM Create a simple icon using PowerShell
echo Creating icon file...

powershell -Command "^
Add-Type -AssemblyName System.Drawing; ^
$bitmap = New-Object System.Drawing.Bitmap(256, 256); ^
$graphics = [System.Drawing.Graphics]::FromImage($bitmap); ^
$graphics.SmoothingMode = 'AntiAlias'; ^
$graphics.TextRenderingHint = 'AntiAlias'; ^
$brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush([System.Drawing.Point]::new(0,0), [System.Drawing.Point]::new(256,256), [System.Drawing.Color]::FromArgb(102,126,234), [System.Drawing.Color]::FromArgb(118,75,162)); ^
$graphics.FillRectangle($brush, 0, 0, 256, 256); ^
$font = New-Object System.Drawing.Font('Arial', 32, [System.Drawing.FontStyle]::Bold); ^
$textBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White); ^
$text = 'EDU' + [char]10 + 'MCQ'; ^
$textSize = $graphics.MeasureString($text, $font); ^
$x = (256 - $textSize.Width) / 2; ^
$y = (256 - $textSize.Height) / 2; ^
$graphics.DrawString($text, $font, $textBrush, $x, $y); ^
$bitmap.Save('%CD%\EduMCQ.png', [System.Drawing.Imaging.ImageFormat]::Png); ^
$graphics.Dispose(); ^
$bitmap.Dispose(); ^
$brush.Dispose(); ^
$font.Dispose(); ^
$textBrush.Dispose();"

if exist "EduMCQ.png" (
    echo ✅ Icon created successfully!
    echo.
    
    REM Convert PNG to ICO using PowerShell
    echo Converting to ICO format...
    powershell -Command "^
    Add-Type -AssemblyName System.Drawing; ^
    $png = [System.Drawing.Image]::FromFile('%CD%\EduMCQ.png'); ^
    $icon = [System.Drawing.Icon]::FromHandle($png.GetHicon()); ^
    $fileStream = [System.IO.File]::Create('%CD%\EduMCQ.ico'); ^
    $icon.Save($fileStream); ^
    $fileStream.Close(); ^
    $png.Dispose(); ^
    $icon.Dispose();"
    
    if exist "EduMCQ.ico" (
        echo ✅ ICO file created successfully!
        echo.
        
        REM Create desktop shortcut with icon
        echo Creating desktop shortcut with custom icon...
        
        powershell -Command "^
        $WshShell = New-Object -comObject WScript.Shell; ^
        $Shortcut = $WshShell.CreateShortcut('%USERPROFILE%\Desktop\EduMCQ Learning.lnk'); ^
        $Shortcut.TargetPath = '%CD%\EduMCQ_App.bat'; ^
        $Shortcut.WorkingDirectory = '%CD%'; ^
        $Shortcut.IconLocation = '%CD%\EduMCQ.ico'; ^
        $Shortcut.Description = 'EduMCQ Smart Learning Platform'; ^
        $Shortcut.Save();"
        
        echo.
        echo 🎉 SUCCESS! Everything completed automatically!
        echo.
        echo ✅ Custom icon created (EduMCQ.ico)
        echo ✅ Desktop shortcut created with icon
        echo ✅ Professional app appearance ready
        echo.
        echo 🚀 Your EduMCQ app now has:
        echo 📱 Beautiful custom icon on desktop
        echo 🎯 Professional branded appearance  
        echo ✨ One-click access from desktop
        echo.
        echo Double-click "EduMCQ Learning" on your desktop to start!
        echo.
        
        REM Clean up temporary PNG file
        del "EduMCQ.png" >nul 2>&1
        
    ) else (
        echo ❌ Failed to create ICO file
        echo Please check if PowerShell is available
    )
    
) else (
    echo ❌ Failed to create icon
    echo Please check if PowerShell is available
)

echo.
pause