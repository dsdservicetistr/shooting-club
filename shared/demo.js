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
    banner_image: ''
  },
  members: [
    { id: 'M001', full_name: 'สมาชิกตัวอย่าง หนึ่ง', photo: '', generation: '2', role: 'ประธานชมรม' },
    { id: 'M002', full_name: 'สมาชิกตัวอย่าง สอง', photo: '', generation: '2', role: '' },
    { id: 'M004', full_name: 'สมาชิกตัวอย่าง สี่', photo: '', generation: 'ก่อตั้ง', role: '' },
    { id: 'M005', full_name: 'สมาชิกตัวอย่าง ห้า', photo: '', generation: 'ก่อตั้ง', role: '' }
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
