import React from 'react';
import '../../style/extend.scss';
import { Form } from 'react-router-dom';

const Authentication = () => {
    return (
        <div>
            <div className='wrapper-checkout'>
                {/* <Form method=''> */}
                <div className="wrapper-form">
                    <div className='flex-vr-container'>
                        <div className='title'>
                            <h2>Create a new user</h2>
                        </div>
                        <div className='email'>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" />
                        </div>
                        <div className='password'>
                            <label htmlFor="password">Password</label>
                            <input type='password' name="password" id="password" />
                        </div>
                        <div className='btns'>
                            <button className='btn'>Login</button>
                            <button className='btn'>Save</button>
                        </div>
                    </div>
                </div>
                {/* </Form> */}
            </div>
        </div>
    );
};

export default Authentication;