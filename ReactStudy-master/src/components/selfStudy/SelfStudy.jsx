import React from 'react'
import { useState } from 'react'

export default function SelfStudy() {
    const [names , setNames] = useState([]);
    const [items, setItems] = useState();

    const handleChange = (e) => {
        setItems(e.target.value);
    }

    const handlePlus = () => {
        setNames((prevState)=> {
            return (
                [items, ...prevState]
            );
        })
    }
  return (
    <>
        <div className='box1' 
            style={{
                'display' : 'flex',
                'alignItems' : 'center',
                'justifyContent' : 'center',
                'padding' : '30px',
            }} 
        >
            <h3 
                style={{
                    'marginRight' : '15px',
                }}
            >이름을 입력해주세요.</h3>
            <input type="text" className='text-input' onChange={handleChange}/>
            <button className='plus-btn' onClick={handlePlus}
                style={{
                    'backgroundColor' : '#68b4ff',
                    'color': '#ffffff',
                    'border': '1px solid transparent'
                }}
            >추가하기</button>
        </div>

        <div className='box2'>
            <h3>사기꾼이름</h3>
            {
            !names.length ? '아무것도없음' : 
            names.map((name, idx) => {
                return <p key={idx}>{name}</p>
            })
            }
        </div>
    </>
  )
}