
import React from 'react';

export default function ChangeBg(props) {

    let rbgChange = () => {
        // props.setBg('red');
        document.body.style.backgroundColor = 'red';
    }
    let gbgChange = () => {
        // props.setBg('green');
        document.body.style.backgroundColor = 'green';
    }
    let cbgChange = () => {
        // props.setBg('coral');
        document.body.style.backgroundColor = 'coral';
    }
    let pbgChange = () => {
        // props.setBg('purple');
        document.body.style.backgroundColor = 'purple';
    }
    let bbgChange = () => {
        // props.setBg('purple');
        document.body.style.backgroundColor = 'black';
    }
    return (
        <div>
            <div className="container my-1" >
                <button className='btn btn-primary mx-1' onClick={rbgChange} style={{ padding: '2px 10px',borderRadius:"99px", backgroundColor: 'red' }}>R</button>
                <button className='btn btn-primary mx-1' onClick={gbgChange} style={{ padding: '2px 10px',borderRadius:"99px", backgroundColor: 'green' }}>G</button>
                <button className='btn btn-primary mx-1' onClick={cbgChange} style={{ padding: '2px 10px',borderRadius:"99px", backgroundColor: 'coral' }}>C</button>
                <button className='btn btn-primary mx-1' onClick={pbgChange} style={{ padding: '2px 10px',borderRadius:"99px", backgroundColor: 'purple' }}>P</button>
                <button className='btn btn-primary mx-1' onClick={bbgChange} style={{ padding: '2px 10px',borderRadius:"99px", backgroundColor: 'black' }}>P</button>
            </div>

        </div>
    )
}
