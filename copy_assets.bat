@echo off
echo Creating directories...
if not exist "public\assets\auras" mkdir "public\assets\auras"

echo Copying Aura Images...
copy /Y "C:\Users\anek_\.gemini\antigravity\brain\86585e53-e1d6-4208-bd7e-ba5f069dbe23\aura_love_pink_1766132790523.png" "public\assets\auras\love.png"
copy /Y "C:\Users\anek_\.gemini\antigravity\brain\86585e53-e1d6-4208-bd7e-ba5f069dbe23\aura_health_green_1766132818644.png" "public\assets\auras\health.png"
copy /Y "C:\Users\anek_\.gemini\antigravity\brain\86585e53-e1d6-4208-bd7e-ba5f069dbe23\aura_work_blue_1766132839067.png" "public\assets\auras\work.png"
copy /Y "C:\Users\anek_\.gemini\antigravity\brain\86585e53-e1d6-4208-bd7e-ba5f069dbe23\aura_finance_gold_1766132905274.png" "public\assets\auras\finance.png"
copy /Y "C:\Users\anek_\.gemini\antigravity\brain\86585e53-e1d6-4208-bd7e-ba5f069dbe23\aura_family_purple_1766132928203.png" "public\assets\auras\family.png"

echo Done!
pause
