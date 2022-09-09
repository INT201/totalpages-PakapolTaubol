const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
  //code here
  if(arrayItems === null || arrayItems === undefined) { // arrayItems เป็น null หรือ undefined ให้ return undefined
    return undefined 
  }
  if(rowsPerPage === 0 || 
    rowsPerPage === undefined || 
    rowsPerPage === null) { // rowsPerPage เป็น null หรือ undefined หรือเป็น 0 จะ return 1
    return 1
  }
  return Math.ceil( arrayItems.length / rowsPerPage ) // จำนวนรายการ / จำนวนรายการที่ใส้ได้ในหนึ่งหน้า
}                                                     // Math.ceil ช่วยปัดเศษขึ้นให้
module.exports = totalPages
