import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-modal';
import { passwordReset } from '../auth/auth';
import check from "../assets/image/check.gif";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

function PasswordReset() {

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [email, setEmail] = useState('');

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
    }

    function closeModal() {
        setIsOpen(false);
    }

    const handleClick = () => {
        console.log(email);
        if (email)
            passwordReset(email);
        openModal();
    }

    return (
        <>
            <div className='w-full h-screen dashboard-bg flex justify-center items-center'>
                <div className="row">
                    <h1>Forgot Password</h1>
                    <h6 className="information-text">Enter your registered email to reset your password.</h6>
                    <div className="form-group">
                        <input type="email" name="user_email" id="user_email" value={email} onChange={e => setEmail(e.target.value)} />
                        <p><label for="username" >Email</label></p>
                        <button onClick={handleClick}>Reset Password</button>
                    </div>
                    <div className="footer">
                        <h5>New here? <Link to='/login'>Sign Up.</Link></h5>
                        <h5>Already have an account? <Link to='/login'>Sign In.</Link></h5>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className='min-w-[300px] rounded-md flex flex-col justify-center items-center gap-4'>
                    <img src={check} className="w-20 h-20" alt="" />
                    <h1 className='font-lg'>Email Sent Successfully</h1>
                    <button className='bg-[#7ED321] hover:bg-[#297e07] text-white font-bold py-2 px-4 rounded-full' onClick={closeModal}>OK</button>
                </div>
            </Modal>
        </>
    )
}

export default PasswordReset