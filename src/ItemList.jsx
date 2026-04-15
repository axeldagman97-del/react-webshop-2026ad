import React, {useState }from 'react'


//array items för lista
const items = [
    {id: 1, name: 'Tröja', brand: 'Adidas', color: 'black'},
    {id: 2, name: 'Tröja', brand: 'Adidas', color: 'green'},
    {id: 3, name: 'Tröja', brand: 'Puma', color: 'blue'},
    {id: 4, name: 'Tröja', brand: 'Nike', color: 'red'}
];

function ItemList () {
    const [selectedBrand, setSelectedBrand] = useState(null);


    return (
        <div>
            <h2> välj en tröja för att se information: </h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        Namn:{item.name}, 
                        Märke: {item.brand},
                        Färg:{item.color},

                         <button onClick={() => setSelectedBrand(item.brand)} style={{ marginLeft: '10px' }}> Visa märke 
                         </button>
                    </li>
                ))}
            </ul>

            <div style={{ marginTop: '20px', fontWeight: 'bold', color: 'green' }}>
                Du valde en tröja från:{selectedBrand}
            </div>
        </div>
    );
}


export default ItemList;