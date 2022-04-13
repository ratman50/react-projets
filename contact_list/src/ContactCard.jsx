import React,{useState} from 'react'

const ContactCard = ({item}) => {
    const {name,email,picture,age}=item;
    const [showAge, setShowAge] = useState(false);
    function handleToggle() {
        setShowAge(preShowAge=>!preShowAge);
    }
  return (
    <div className='contact-card'>
        <img 
        src={picture}
        alt="profile"
        />
        <div className="user_detail">
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <button onClick={handleToggle} style={{cursor:"pointer"}}>Show Age</button>
            {   showAge && <p>Age:{age}</p>

            }
        </div>
    </div>
  )
}

export default ContactCard