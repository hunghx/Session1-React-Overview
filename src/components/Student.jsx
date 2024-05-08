import React from 'react'
import {students} from './data.js'

export default function Student() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Avatar</th>
            <th>BirthDay</th>
            <th>Sex</th>
          </tr>

        </thead>
        <tbody>
          {students.map((stu)=><tr key={stu.id}>
            <td>{stu.id}</td>
            <td>{stu.name}</td>
            <td><img src={stu.imgUrl} alt={stu.name} width={200} height={300} style={{objectFit:"cover"}}/></td>
            <td>{stu.birthDay}</td>
            <td>{stu.sex?"Nam":"Nữ"}</td>
          </tr>)}
        
        </tbody>
      </table>

    </div>
  )
}
