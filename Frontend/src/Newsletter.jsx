import style from './Newsletter.module.css';
import { useState, useEffect } from 'react';

function Newsletter() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulated local success message
        if (email.trim()) {
            setMessage('Joined!');
            setEmail('');
        } else {
            setMessage('Please enter a valid email.');
        }
    };

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                setMessage('');
            }, 2000); // Show message for 2 seconds
            return () => clearTimeout(timer);
        }
    }, [message]);

    return (
        <div className={style.box}>
            <h2>Join Our Nutrition Program</h2>
            <form className={style.ff} onSubmit={handleSubmit}>
                <input
                    type='email'
                    className={style.inp}
                    placeholder='Email Address'
                    required
                    value={email}
                    onChange={handleChange}
                />
                <button className={style.submitbotton} type='submit'>Join</button>
            </form>
            {message && <p className={style.message}>{message}</p>}
        </div>
    );
}

export default Newsletter;
