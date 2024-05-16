import React, { useState } from 'react';


const ContactManager = () => {
    const [contacts, setContacts] = useState([]);
    const [contact, setContact] = useState({
        id: 0,
        name: '',
        email: '',
        phone: ''
    })
    
    const handleChange = (event) => {
        event.preventDefault();
        
        let { name, value } = event.target;
        console.log(name, value)
        const newContact = {...contact}
        console.log(newContact)
        // because we have a default or starting contact state
        for (let key of Object.keys(newContact)){
            if (key == name){
                newContact[key] = value
            }
        }
        
        newContact.id = contacts.length + 1
        setContact(newContact)
        
    }
    
    const addContact = (event) => {
        event.preventDefault();
        console.log('here')
        const currentContacts = [...contacts, contact]
        setContacts(currentContacts)
    }
    
    const deleteContact = (id) => {
        const currentContacts = [...contacts]
        const filteredContacts = currentContacts.filter((contact) => contact.id != id)
        setContacts(filteredContacts)
    }
    
    return (
        <div>
            <h2>Contact Manager</h2>
            <form onSubmit={addContact}>
                <input type='text' name='name' placeholder='Name' onChange={handleChange}></input>
                <input type='text' name='email' placeholder='Email' onChange={handleChange}></input>
                <input type='text' name='phone' placeholder='Phone' onChange={handleChange}></input>
                <button type='submit'>Add Contact</button>
                <button type='reset'>Reset</button>
            </form>
            {contacts && 
            <ul>
            {contacts.map( contact => (
                <li key={contact.id}>
                    <div>Name: {contact.name}</div>
                    <div>Phone: {contact.phone}</div>
                    <div>Email: {contact.email}</div>
                    <button type='button' onClick={ () => deleteContact(contact.id)}>Delete</button>
                </li>
            ))}
            </ul>
            }
        </div>
    )
}

export default ContactManager;