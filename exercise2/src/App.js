import logo from './logo.svg';
import './App.css';
import './Header.css';
import Header from './Header';
import './List.css'
import List from './List';
import './Button.css'
import Button from './Button';
import React, {useState} from 'react';

function App() {
  const [data, setData] = useState([
    {
      id: '1',
      name: 'Carrot',
      quantity: 0,
      
    },
    {
      id: '2',
      name: 'Strawberries',
      quantity: 0,
      
    },
    {
      id: '3',
      name: 'Yogurt',
      quantity: 0,
      
    },
    {
      id: '4',
      name: 'Beer',
      quantity: 0,
      
    },
  ])
  const updateData = (updated_item) =>{
    let newData = data.filter(item => item.id != updated_item.id)
    newData.push(updated_item)
    newData.sort((item1,item2) => (item1.id < item2.id) ? -1: 1)
    console.log(newData)
    setData(newData)
  }
  return (
    <div className="App">
      <Header/>
      <List data = {data}/>
      <Button data = {data} updateData = {updateData}/>
    </div>
  );
}

export default App;
