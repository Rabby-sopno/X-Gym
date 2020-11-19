import React from 'react';
import './BankPayment.css';

const BankPayment = () => {

    const handlesubmit=() => {
        alert("success")
    }

    return (
        <div className="container">


            <div className="container mt-5  ">

                <form action="submit">
                    <div className="bankform">

                        <div class="form-row">

                            <div className="com-md-6">
                                <div class="form-check">
                                    <input class="form-check-input inp" style={{ color: 'yellow' }} type="radio" name="exampleRadios" id="exampleRadios1" checked />
                                    <label class="form-check-label" for="exampleRadios1">
                                        Credit Card
                            </label>
                                </div>
                                <small className="ml-3" >Safe Money transfer using your bank account. Visa , Maestro , Discover , American Express</small>
                            </div>

                            <div class="form-group col-md-3 ml-5" id="credit_cards">
                                <img src="https://i.ibb.co/NF3dnhG/credit-cards-mastercard.png" id="visa" />
                                <img src="https://i.ibb.co/PNV08Lv/credit-cards-visa.png" id="mastercard" />
                                <img src="https://i.ibb.co/XjpNZJt/credit-cards-amex.png" id="amex" />

                            </div>
                        </div>

                        <div class="form-row">
                            <div className="form-row col-md-12 mt-3">
                                <div class="form-group" id="card-number-field">
                                    <label for="cardNumber">Card Number</label>
                                    <input type="text" class="form-control input" id="cardNumber" />
                                </div>
                            </div>
                        </div>

                        <div class="form-row">

                            <div className="form-row col-md-3 w-5 mt-5">
                                <div class="form-group" id="card-number-field">
                                    <label for="cardNumber">Name On Card</label>
                                    <input type="text" class="form-control inp-ctrl " id="cardNumber" />
                                </div>
                            </div>

                            <div className="form-row col-md-2 ml-2 mt-5">
                                <div class="form-group" id="card-number-field">
                                    <label for="cardNumber">Expiry Date</label>
                                    <input type="date" class="form-control" id="cardNumber" />
                                </div>
                            </div>

                            <div className="form-row col-md-2 ml-5 mt-5">
                                <div class="form-group" id="card-number-field">
                                    <label for="cardNumber">Svv Code</label>
                                    <input type="text" class="form-control" id="cardNumber" />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="container mt-5 bankform ">
                        <div class="form-row">

                            <div className="com-md-6">
                                <div class="form-check">
                                    <input class="form-check-input inp" style={{ color: 'yellow' }} type="radio" name="exampleRadios" id="exampleRadios1" checked />
                                    <label class="form-check-label" for="exampleRadios1">
                                        Paypal
                               </label>
                                </div>
                                <small className="ml-3" >you will be redirected to paypal website to purchase security</small>
                            </div>

                            <div class="form-group col-md-3 ml-5 paypal " id="credit_cards">
                                <img style={{ width: "40%", marginLeft: "60px" }} src="https://i.ibb.co/1XpXHzY/Bitmap.png" id="amex" />

                            </div>


                        </div>
                    </div>



                </form>

            </div>
            <div className="form-group text-centet ml-0 mt-5 ">
                <button onClick={handlesubmit} type="submit" class="btn-nxt">Send</button>
            </div>


        </div >
    );
};

export default BankPayment;
