import React from "react";

function List(props) {
    const { data } = props
    return (
        <div className='Shopping'>
            <ul>
                {data.map(item => {
                    return (<div>{item.name}</div>)
                })}
            </ul>
            <ul>
                {data.map(item => {
                    return (<div>{item.quantity}</div>)
                })}
            </ul>


        </div>

    )
}
export default List