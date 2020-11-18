import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import FakeData from '../../FakeData/FakeData';
import Footer from '../CommonComponent/Footer/Footer';
import Head from '../CommonComponent/Head/Head';
import './Classes.css'

const Classes = () => {
    
    const [classes, setClasses] = useState(FakeData);

    const history = useHistory()
    const handleRegistry = (item) => {
        history.push('/registry', {params:item} );
    }

    return (
        <div >
            <Head></Head>
            <section className="container mt-5">
            <div className="row">
            {
                        classes.map(item=>
                        <div className="col-4"  onClick={ () => handleRegistry(item)} key={item.name} style={{marginBottom:'30px'}}>
                           <div>
                               <img className="img-cls" src={item.image} alt=""/>
                                <h4 className="bg-warning bg-cls font-weight-bold">{item.name}</h4>
                            </div> 
                            </div>)
                    }
            </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Classes;