import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const RegisterPage = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function registerUser(ev) {
        ev.preventDefault();
        axios.get('https://aprilxs-musical-goggles-rwp7gvjr75xcx7x6-4000.preview.app.github.dev/test');
    }

    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4">Register</h1>
                <form className="max-w-md mx-auto" onSubmit={registerUser}>
                    <input type="text" placeholder='John Doe' 
                    value={name}
                     onChange={(ev) => {setName(ev.target.value)}} />
                    <input type="email" placeholder='your@email.com' 
                    value={email}
                    onChange={(ev) => {setEmail(ev.target.email)}}/>
                    <input type="password" placeholder='password' 
                    value={password}
                    onChange={(ev) => {setPassword(ev.target.password)}}/>
                    <button className="primary">Register</button>
                    <div className='text-center py-2 text-gray-500'>
                        Already a Member? <Link className='underline text-black' to={"/Login"}>Login now</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;