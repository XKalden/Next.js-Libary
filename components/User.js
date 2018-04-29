import React from 'react';


const user = (props) => (
    <div>
        <h1> {props.name} </h1>
        <p> Age: {props.age} </p>
        <p className="wow"> wowow oasndofnd </p>

        <style jsx> {`
            div { border: 1px solid red;
            box-shadow: 0 2p 3px #ccc;
            padding: 20px;
            text-align: center;
            background-color: coral;
            }
            p.wow{
                color: blue;
                font-size: 30px;
            }


        `}
        </style>
    
    </div>
);

export default user;