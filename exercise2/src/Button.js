import React from "react";
// her pass function to these buttons, that takes the name of the items
// whenever you click it chnages the state of objects from the parent components
function Button(props){
    const {data, updateData} = props
    const getRandomNumberBetween = (min,max) => {
        return Math.floor(Math.random()*(max-min+1)+min);
    }
    return (
        <div className='ButtonToAdd'>
            {data.map(each_data => {
                return(<button id = {each_data.id} onClick = {() => updateData({
                    'name': each_data.name,
                    'id': each_data.id,
                    'quantity': each_data.quantity + getRandomNumberBetween(1,10)
                })}> {each_data.name}</button>)
                
            })}

        </div>
    )
}
export default Button