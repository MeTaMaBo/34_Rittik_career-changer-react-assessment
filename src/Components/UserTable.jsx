import React from 'react'

const UserTable = () => {
    return (
        <table className="border-collapse border" style={{ width: "600px" }} border="1">
            <tr className='bg-gray-200'>
                <th className='p-2 border border-black' style={{ width: "200px" }}>Name</th>
                <th className='p-2 border border-black' style={{ width: "200px" }}>Lastname</th>
                <th className='p-2 border border-black' style={{ width: "200px" }}>Position</th>
            </tr>
            <tr>
                <td className='border text-center p-1' style={{ width: "200px" }}>Tilis</td>
                <td className='border text-center p-1' style={{ width: "200px" }}>Mek</td>
                <td className='border text-center p-1' style={{ width: "200px" }}>Manager</td>
            </tr>
            <tr>
                <td className='border text-center p-1' style={{ width: "200px" }}>BB</td>
                <td className='border text-center p-1' style={{ width: "200px" }}>Limm</td>
                <td className='border text-center p-1' style={{ width: "200px" }}>Developer</td>
            </tr>
            <tr>
                <td className='border text-center p-1' style={{ width: "200px" }}>Gis</td>
                <td className='border text-center p-1' style={{ width: "200px" }}>Thumprom</td>
                <td className='border text-center p-1' style={{ width: "200px" }}>Designer</td>
            </tr>
        </table>)
}

export default UserTable