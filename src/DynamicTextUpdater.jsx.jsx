import React, {useState }from 'react'


function DynamicTextUpdater() {

const [title, setTitle] = useState("skriv något...");

const handleChange = (e) => {
    const newValue = e.target.value;

    setTitle(newValue);
};

    return (
         <div style={{ padding: '20px' }}> 
             <h1>{title}</h1>

            <input 
             type="text" 
             value={title} 
             onChange={handleChange} 
             placeholder="Ändra rubriken..."
            />
         </div>
    );
}

export default DynamicTextUpdater;
