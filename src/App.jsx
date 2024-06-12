import React, { useState } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);
  const [check, setCheck] = useState(false);

  const add = () => {
    if (item.trim() === '') {
      toast.error('Item cannot be empty');
      return;
    }
    setList([...list, item]);
    setItem('');
    toast.success('Item added');
  };

  const delet = (index) => {
    const l = [...list];
    l.splice(index, 1);
    setList(l);
    toast.success('Item deleted');
  };

  return (
    <>
      <h1>Grocery Bud</h1>
      <div className="input">
        <input
          type="text"
          placeholder="Enter your item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button onClick={add}>Add Item</button>
        {list.map((lis, index) => (
          <div key={index} className="list">
            <input
              type="checkbox"
              style={{ display: 'inline-block' }}
              onChange={(e) => setCheck(e.target.checked)}
            />
            <p style={{ display: 'inline-block' }}>{lis}</p>
            <button
              style={{ display: 'inline-block' }}
              onClick={() => delet(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
