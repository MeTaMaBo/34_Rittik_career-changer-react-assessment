import React from 'react'

const UserTable = () => {
    return (
        <table className="border-collapse border" style={{ width: "600px" }} border="1">
            <tr className='bg-gray-500'>
                <th className='p-2 border border-black' style={{ width: "200px" }}>Name</th>
                <th className='p-2 border border-black' style={{ width: "200px" }}>Number</th>
                <th className='p-2 border border-black' style={{ width: "200px" }}>Position</th>
            </tr>
            <tr>
                <td className='border text-center p-1' style={{ width: "200px" }}>Rittik</td>
                <td className='border text-center p-1' style={{ width: "200px" }}>Chawla</td>
                <td className='border text-center p-1' style={{ width: "200px" }}>CEO</td>
            </tr>
            <tr>
                <td className='border text-center p-1' style={{ width: "200px" }}>Nice</td>
                <td className='border text-center p-1' style={{ width: "200px" }}>021</td>
                <td className='border text-center p-1' style={{ width: "200px" }}>Developer</td>
            </tr>
            <tr>
                <td className='border text-center p-1' style={{ width: "200px" }}>Jay</td>
                <td className='border text-center p-1' style={{ width: "200px" }}>013</td>
                <td className='border text-center p-1' style={{ width: "200px" }}>Designer</td>
            </tr>
            <tr>
                <td className='border text-center p-1' style={{ width: "200px" }}>May</td>
                <td className='border text-center p-1' style={{ width: "200px" }}>061</td>
                <td className='border text-center p-1' style={{ width: "200px" }}>FullStack</td>
            </tr>
        </table>)
}

export default UserTable