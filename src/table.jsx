import React, { Component } from 'react'
import './table.css'

export default class Table extends Component {
  render() {
    return (
        <table className='table'>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Surname</th>
          <th>Country</th>
          <th>Edit/Delete</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Firsdavs</td>
          <td>Nazarov</td>
          <td>Uzbekistan</td>
          <td><button class="button1">Edit</button> <button class="button2">Delete</button></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Murodjon</td>
          <td>Tokhirov</td>
          <td>Uzbekistan</td>
          <td><button class="button1">Edit</button> <button class="button2">Delete</button></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Azizbek</td>
          <td>Urinov</td>
          <td>Uzbekistan</td>
          <td><button class="button1">Edit</button> <button class="button2">Delete</button></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Azizbek</td>
          <td>Urinov</td>
          <td>Uzbekistan</td>
          <td><button class="button1">Edit</button> <button class="button2">Delete</button></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Azizbek</td>
          <td>Urinov</td>
          <td>Uzbekistan</td>
          <td><button class="button1">Edit</button> <button class="button2">Delete</button></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Azizbek</td>
          <td>Urinov</td>
          <td>Uzbekistan</td>
          <td><button class="button1">Edit</button> <button class="button2">Delete</button></td>
        </tr>
      </table>
    )
  }
}
