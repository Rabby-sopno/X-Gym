import React from 'react';
import './ClassShedule.css'
import image from '../../image/advanced.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import Head from '../CommonComponent/Head/Head';
import Footer from '../CommonComponent/Footer/Footer';

const ClassShedule = () => {
    return (
        <div>
            <Head></Head>
            <section  className="container">
            <div className="powerx3 row d-flex ml-5 mt-5">

                <div className="col-md-6 d-inline our_class_info">

                    <img className="img-schedule" src={image} alt="" />

                    <h4 className="mt-5" > /// information is here /////  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quibusdam sequi iure perspiciatis asperiores totam. Cupiditate atque nobis eligendi tenetur amet quos in,
                    provident labore enim quia quod, vel odit.
                    </h4>

                    <ul className="mt-5">
                        <li> <FontAwesomeIcon className="font" icon={faCheckSquare} /> Having Simmer Shapely Thighs</li>
                        <li> <FontAwesomeIcon className="font" icon={faCheckSquare} /> Getting Stronger Body</li>
                        <li> <FontAwesomeIcon className="font" icon={faCheckSquare} /> Increased Metabolism</li>
                        <li> <FontAwesomeIcon className="font" icon={faCheckSquare} /> Increased Muscular Endurance</li>
                        <li> <FontAwesomeIcon className="font" icon={faCheckSquare} /> Maximum Result In Less Time</li>
                        <li> <FontAwesomeIcon className="font" icon={faCheckSquare} /> Firm Hips and Tummy</li>
                    </ul>


                </div>

                <div className="col-md-4 con pl-3 shedule">
                    <div className="d-flex">
                        <h1 className="sc">Class </h1>
                        <h1 >Schedule</h1>
                    </div>

                    <div className="row rows">

                    <div className="d-inline column w-40 m-4 p-1">   <h3>Monday </h3>  <small>9.00 Am - 10.00 Am</small> </div>
                    <div className="d-inline column w-40 m-4 p-1">    <h3>Tuesday</h3>  <small>9.00 Am - 10.00 Am</small> </div>


                    </div>

                    <div className="row rows">

                    <div className="column w-40 m-4 p-1">    <h3>Wednesday</h3> <small>9.00 Am - 10.00 Am</small> </div>
                    <div className="column w-40 m-4 p-1">    <h3 >Thursday</h3>  <small>9.00 Am - 10.00 Am</small> </div>


                    </div>
                    <div className="row rows">

                    <div className="column w-40 m-4 p-1">    <h3 >Friday</h3>  <small>9.00 Am - 10.00 Am</small> </div>
                    <div className="column w-40 m-4 p-1">    <h3>Saturday</h3>  <small>9.00 Am - 10.00 Am</small> </div>


                    </div>

                </div>
            </div>
        </section>
        <Footer></Footer>
    </div>
    );
};

export default ClassShedule;