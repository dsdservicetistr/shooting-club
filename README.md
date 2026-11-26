# เว็บชมรมยิงปืน วว. — เว็บ 2 แบบ (ทางการ + กันเอง)

โครงสร้าง
- index.html          เปิดเว็บ → ไปหน้าแบบเป็นทางการ
- shared/             โค้ดกลางที่ใช้ร่วมกัน (config.js ใส่ Web app URL ที่นี่ที่เดียว)
- formal/             เว็บแบบเป็นทางการ (strings.js = ถ้อยคำ, theme.css = สี/ฟอนต์)
- casual/             เว็บแบบกันเอง (strings.js, theme.css)

ดูตัวอย่างก่อนมี API: เพิ่ม ?demo=1 ท้าย URL ของหน้าใดก็ได้
ใส่ API จริง: แก้ shared/config.js วาง Web app URL (ลงท้าย /exec) แทน PASTE_WEB_APP_URL_HERE
