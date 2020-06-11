import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        const {title , itemDelete , itemEdit} = this.props;
    
        const labelStyle = {
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center"
           }

            const input = {
                marginRight: "10px"
            }


        return (
                <li className = "list-group-item text-capitalize d-flex justify-content-between my-2">
                   <label style = {labelStyle}><input type="checkbox"  
                     style = {input}/><h3>{title}</h3></label>
                   <div className = "todo-icons">
                        <span className = "mx-2 text-primary" onClick = {itemEdit}>
                        <i class="fas fa-pen"></i></span>
                        <span className = "mx-2 text-danger" onClick = {itemDelete}>
                        <i className="fas fa-trash"></i></span>
                    </div>
                </li>
        )
    }
}

