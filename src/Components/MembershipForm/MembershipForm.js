import React from 'react';
import Footer from '../CommonComponent/Footer/Footer';
import Head from '../CommonComponent/Head/Head';
import './MembershipForm.css'
import pg from '../../image/regis.png'

const MembershipForm = () => {
    return (
        <section>
          <Head></Head>
        <div className="container">  
        <img src={pg} className="pg" alt="..." />
    <form class="needs-validation mt-3 mb-5" novalidate>

  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationCustom01">First name</label>
      <input type="text" class="form-control" id="validationCustom01"  required />
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>

    <div class="col-md-6 mb-3">
      <label for="validationCustom02">Last name</label>
      <input type="text" class="form-control" id="validationCustom02"  required/>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
  </div>

  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationCustom01">Email</label>
      <input type="email" class="form-control" id="validationCustom01" required />
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>

    <div class="col-md-6 mb-3">
      <label for="validationCustom02">Phone Number</label>
      <input type="number" class="form-control" id="validationCustom02" required/>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
  </div>



  <div class="form-row">

   

    <div class="col-md-2 mb-3">
    <label for="validationCustom04">Day Of birth</label>
      <select class="custom-select" id="validationCustom04" required>
        <option selected disabled value="">Day</option>
        <option>...</option>
      </select>
      <div class="invalid-feedback">
        Please select
      </div>
    </div>

    <div class="col-md-2 mb-3">
    <label for="validationCustom04">Months Of birth</label>
      <select class="custom-select" id="validationCustom04" required>
        <option selected disabled value="">Months</option>
        <option>...</option>
      </select>
      <div class="invalid-feedback">
        Please select 
      </div>
    </div>

    
    <div class="col-md-2 mb-3">
    <label for="validationCustom04">Year Of birth</label>
      <select class="custom-select" id="validationCustom04" required>
        <option selected disabled value="">Year</option>
        <option>...</option>
      </select>
      <div class="invalid-feedback">
        Please select
      </div>
    </div>

    <div class="col-md-6 mb-3">
    <label for="validationCustom04">Select Gender</label>
      <select class="custom-select" id="validationCustom04" required>
        <option selected disabled value="">Gender</option>
        <option>...</option>
      </select>
      <div class="invalid-feedback">
        Please select
      </div>
    </div>
    

  </div>


  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationCustom01">Address line 1:</label>
      <input type="text" class="form-control" id="validationCustom01"  required />
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>

    <div class="col-md-6 mb-3">
      <label for="validationCustom02">Country/Region</label>
      <input type="text" class="form-control" id="validationCustom02"  required/>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
  </div>

  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationCustom01">City</label>
      <input type="text" class="form-control" id="validationCustom01"  required />
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>

    <div class="col-md-6 mb-3">
      <label for="validationCustom02">Postcode</label>
      <input type="text" class="form-control" id="validationCustom02"  required/>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
  </div>


  <button className="btn-nxt" type="submit">Next</button>
</form>
</div>
<Footer></Footer>
</section>
    );
};

export default MembershipForm;