export default function generateBookingId(){
  const d = new Date()
  const date = d.toISOString().slice(0,10).replace(/-/g,'') // yyyymmdd
  const rand = Math.floor(100 + Math.random() * 900)
  return `SJ${date}${rand}`
}
