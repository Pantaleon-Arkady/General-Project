import './App.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import axios from './api/axios';
import { useState } from 'react';

function App() {
    const [backendMsg, setBackendMsg] = useState(false);

    async function handshake() {
        try {
            const res = await axios.get('/handshake');

            if (res.data.stat) {
                setBackendMsg(res.data.message);
            }
        } catch (err) {
            console.log(err.response);
        }
    }


    return (
        <>
            <div className="h-100 w-100 p-3 bg-white">
                <div className="h-100 border border-2 rounded bg-light p-3">
                    <Link to="/trials" className="btn btn-primary">Trials</Link>
                    <Button variant="primary">Primary Button by react - bootstrap</Button>
                    <button className="btn btn-primary">Primary Button by bootstrap</button>

                    <div className="bg-primary text-white rounded p-2 my-3 w-50">
                        <p className="bg-light text-dark rounded p-1">
                            Handshake division
                        </p>

                        <p className="bg-light text-dark rounded p-1">
                            Click the button to test frontend and backend connection to do the general handshake
                        </p>    
                        <Button variant="danger" onClick={handshake}>Click to handshake</Button>
                        <div className="bg-light text-dark rounded my-2 p-1">
                            <p>
                                Message:
                            </p>
                            <p>
                                {backendMsg ? backendMsg : "Backend is not yet reached."}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App;
