export default function formatCurrency(number = 0){
  return Number(number).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })
}
