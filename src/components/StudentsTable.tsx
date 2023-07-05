import Image from "next/image"
import React from "react"

const StudentsTable = () => {
  return (
    <div className="overflow-x-auto max-w-screen-lg mx-auto">
      <div className="max-h-64 overflow-y-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Website</th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company Name</th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Edit</th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delete</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-2 py-4 whitespace-nowrap">
                <Image src="/avatar2.png" alt="profile image" width={64} height={110} className="rounded-md" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
              <td className="px-6 py-4 whitespace-nowrap">30</td>
              <td className="px-6 py-4 whitespace-nowrap">john@example.com</td>
              <td className="px-6 py-4 whitespace-nowrap">New York</td>
              <td className="px-6 py-4 whitespace-nowrap">Company Name</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Image src="/edit.svg" alt="profile image" width={16} height={20} />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Image src="/delete.svg" alt="profile image" width={16} height={20} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default StudentsTable
