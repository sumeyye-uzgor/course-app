import React from "react"

const StudentsFooter = () => {
  const rowsPerPageArr = Array.from({ length: 10 }, (_, index) => index + 1)
  return (
    <div className="flex justify-end gap-12 text-sm text-[#9FA2B4]">
      <div className="flex gap-2">
        <p>Rows per page:</p>
        <select>
          {rowsPerPageArr.map((rowCount) => (
            <option key={rowCount}>{rowCount}</option>
          ))}
        </select>
      </div>
      <div className="flex gap-2">
        <p className="mr-2">1-5 of 1240</p>
        <button className="bg-transparent">&lt;</button>
        <button className="bg-transparent">&gt;</button>
      </div>
    </div>
  )
}

export default StudentsFooter
