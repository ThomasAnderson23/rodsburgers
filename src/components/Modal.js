import Msj from "./Msj"
import { useState } from 'react';
import CerrarBtn from '../images/cerrar.svg'
import { db } from '../config/firebase'
import { collection, addDoc } from 'firebase/firestore' 

const Modal = ({setModal, animationModal, setAnimationModal, msj, setMsj, amount, setAmount, date, setDate, hour, setHour, client, setClient, toast}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [comments, setComments] = useState('');

    function closeModal() {
        setAnimationModal(false);

        setTimeout(() => {
            setModal(false);
        }, 3000)
    }

    async function saveClientDB() {
        try {
            await addDoc(collection(db, 'Clientes'), client);
            toast.success('You have successfully booked a table')
        } catch (error) {
            toast.error('Your reservation has failed')
        }
    } 

    function handleSubmit(e) {
        e.preventDefault();
        if([name, email, phone].includes('')) {
            setMsj('Missing slots');

            setTimeout(() => {
                setMsj('')
            }, 3000);

            return;
        }

        const objClient = {
            name,
            email,
            phone,
            comments,
            amount,
            date,
            hour
        }

        setClient({...client, objClient})

        saveClientDB();
        
        closeModal();

        setName('');
        setEmail('');
        setPhone('');
        setComments('');
        setAmount('');
        setDate('');
        setHour('');
    }

    return (
        <div className="container-modal">
            <div className="close-modal">
                <img
                    src={CerrarBtn}
                    alt="cerrar modal"
                    onClick={closeModal}
                />
            </div>
            <form 
                className={`form-modal ${animationModal ? 'animate' : 'close'}`}
                onSubmit={handleSubmit}    
            >
                <legend>Clients Data</legend>
                {msj && <Msj type='error'>{msj}</Msj>}
                <div className='field'>
                    <label htmlFor="nombre">Name</label>
                    <input 
                        id='nombre'
                        type="text"
                        placeholder='Enter First and Last Name'
                        value={name}
                        onChange={e => setName(e.target.value)}     
                    />
                </div>
                <div className='field'>
                    <label htmlFor="email">Email</label>
                    <input 
                        id='email'
                        type="email"
                        placeholder='Write your Email'     
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className='field'>
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        id="phone"
                        type="number"
                        placeholder="Enter your phone number"
                        value={phone}
                        onChange={e => setPhone(Number(e.target.value))}
                    />
                </div>
                <div className='field'>
                    <label htmlFor="comments">Comments</label>
                    <textarea 
                        id="comments"
                        type="text"
                        placeholder="Add a comment"
                        value={comments}
                        onChange={e => setComments(e.target.value)}
                    />
                </div>
                <input type="submit" value="Book" />
            </form>
        </div>
    )
}

export default Modal
