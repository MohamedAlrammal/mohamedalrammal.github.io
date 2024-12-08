import React, { useState } from 'react';
import './Compose.css';

const Compose = () => {
    const [showEmailPage, setshowEmailPage] = useState(false);

    const toggleForm = () => {
        setshowEmailPage(!showEmailPage);
    };

    return (
        <div className='wrapper1'>
            <button className="Compose-button" onClick={toggleForm}>
                Compose
            </button>

            {showEmailPage && (
                <form className='Email-page'> 
                    <div className='input-box1'>
                        <label>
                            To:
                            <input type="text" name="name" />
                        </label>
                    </div>
                    <div>
                        <label>
                            Email:
                            <input type="email" name="email" />
                        </label>
                    </div>
                    <button  type="submit">Submit</button>
                </form>
            )}
        </div>
    );
};

export default Compose;
