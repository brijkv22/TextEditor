// import React, { useState } from 'react'

export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     backgroundColor: 'white',
    //     color: 'black'

    // });
    let myStyle = {
        color: props.mode === 'dark'?'white':'#0c0d2a',
        backgroundColor: props.mode === 'dark'?'#0c0d2a':'white'
    }

    return (
        <div className='container' style={myStyle}>
            <h2 className='my-2'>About Us</h2>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item" style={myStyle}>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Quos vel maxime illum veniam quae voluptatibus exercitationem.
                        Sint voluptatibus quia consectetur aut reiciendis exercitationem sit hic facilis?
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, necessitatibus. Lorem ipsum,
                        dolor sit amet consectetur adipisicing elit. Impedit dicta excepturi neque numquam voluptate,
                        provident deserunt a possimus ipsam aperiam in ratione earum rerum praesentium itaque ab dolores
                        sed nemo culpa accusamus quia iure voluptatibus! Provident, incidunt dicta id repellendus
                        porro, sint harum voluptatibus rerum, laborum eos animi omnis ad.
                    </p>

                </div>

            </div>
            
        </div>
    )
}
