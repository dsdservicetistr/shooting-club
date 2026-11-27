// ข้อมูลตัวอย่าง ใช้เมื่อยังไม่ได้ตั้ง API_URL หรือเปิดหน้าเว็บด้วย ?demo=1
window.CLUB_DEMO = {
  config: {
    club_name: 'ชมรมยิงปืน วว.',
    founded_year: '',
    slogan_formal: 'วินัย ความแม่นยำ ความปลอดภัย',
    slogan_casual: 'มายิงกัน สะใจแน่!',
    logo: '',
    contact_phone: '02-577-9000 ต่อ 9356',
    contact_name: 'ประธานชมรม',
    trial_rounds: '10',
    full_box_rounds: '',
    full_box_price: '',
    venue: '',
    banner_show: '1',
    banner_text: 'เร็ว ๆ นี้ ให้ลอง Beretta T1',
    banner_image: '',
    perk_show: '1',
    perk_image: '',
    perk_caption: 'ให้ลอง Beretta T1',
    perk_ribbon: 'เร็ว ๆ นี้'
  },
  members: [
    { id: 'M001', full_name: 'ประธานผู้ก่อตั้ง ตัวอย่าง', photo: '', role: 'ประธานผู้ก่อตั้ง', tagline: 'คำโปรยของประธานผู้ก่อตั้ง', bio: 'ประวัติโดยย่อ เช่น ก่อตั้งชมรมเมื่อใด และมีบทบาทอย่างไรในการสร้างชมรมให้เติบโต' },
    { id: 'M002', full_name: 'ประธานปัจจุบัน ตัวอย่าง', photo: '', role: 'ประธานปัจจุบัน', tagline: 'คำโปรยของประธานปัจจุบัน', bio: 'ประวัติโดยย่อ เช่น เริ่มยิงปืนเมื่อใด และเป้าหมายของชมรมในช่วงที่ดูแลอยู่' },
    { id: 'M003', full_name: 'รองประธาน ตัวอย่าง', photo: '', role: 'รองประธาน', tagline: 'คำโปรยของรองประธาน', bio: 'ประวัติโดยย่อของรองประธาน' },
    { id: 'M004', full_name: 'เหรัญญิก ตัวอย่าง', photo: '', role: 'เหรัญญิก' },
    { id: 'M005', full_name: 'สมาชิก ตัวอย่างหนึ่ง', photo: '', role: '' },
    { id: 'M006', full_name: 'นายสมาชิก ตัวอย่างสอง', photo: '', role: '' }
  ],
  competitions: [
    { id: 'C001', year: 2568, name: 'การแข่งขันตัวอย่าง ครั้งที่ 1', venue: 'สนามตัวอย่าง', date: '2025-06-15', category: 'ปืนสั้น', summary: 'สรุปผลสั้น ๆ ของการแข่งขัน' },
    { id: 'C002', year: 2569, name: 'การแข่งขันตัวอย่าง ครั้งที่ 2', venue: 'สนามตัวอย่าง', date: '2026-06-14', category: 'ปืนสั้น', summary: 'สรุปผลสั้น ๆ ของการแข่งขัน' }
  ],
  results: [
    { id: 'R001', competition_id: 'C001', member_name: 'สมาชิกตัวอย่าง หนึ่ง', rank: 1, score: 95, award: 'ชนะเลิศ' },
    { id: 'R002', competition_id: 'C001', member_name: 'สมาชิกตัวอย่าง สอง', rank: 2, score: 90, award: 'รองชนะเลิศ' },
    { id: 'R003', competition_id: 'C002', member_name: 'สมาชิกตัวอย่าง สอง', rank: 1, score: 97, award: 'ชนะเลิศ' }
  ],
  gallery: [
    { id: 'G002', year: 2569, type: 'video', thumb: '', full: '', youtube: 'dQw4w9WgXcQ', caption: 'คลิปตัวอย่าง' }
  ]
};
