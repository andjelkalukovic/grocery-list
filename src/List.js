import React from 'react'
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import './list.css'

const List = ({ items, removeItem, editItem }) => {
    return (
        <div className='list-section'>
            {items.map((item) => {
                const { id, title } = item;

                return (
                    <article key={id}>
                            <p className='title'>{title}</p>
                            <div>
                                <button type='button' onClick={() => editItem(id)}
                                    className='edit-btn px-2' title='Edit'><FaEdit /></button>
                                <button type='button' onClick={() => removeItem(id)}
                                    className='remove-btn px-2' title='Remove'><RiDeleteBin5Fill /></button>
                            </div>
                    </article>
                )
            })}
        </div>
    )
}

export default List;