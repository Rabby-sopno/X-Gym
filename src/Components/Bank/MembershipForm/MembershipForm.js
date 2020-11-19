import React from "react";
import Footer from "../../CommonComponent/Footer/Footer";
import "./MembershipForm.css";
import pg from "../../../image/regis.png";
import Header from "../../CommonComponent/Header/Header";
import { useHistory } from "react-router-dom";

const MembershipForm = () => {
  const history = useHistory();
  const handleSubmit = () => {
    history.push("/payment");
  };
  return (
    <section>
      <Header></Header>
      <div className="container">
        <img src={pg} className="pg" alt="..." />
        <form
          onSubmit={handleSubmit}
          class="needs-validation mt-3 mb-5"
          novalidate
        >
          <div class="form-row">
            <div class="col-md-6 mb-3">
              <label for="validationCustom01">First name</label>
              <input
                type="text"
                class="form-control"
                id="validationCustom01"
                required
              />
              <div class="valid-feedback">Looks good!</div>
            </div>

            <div class="col-md-6 mb-3">
              <label for="validationCustom02">Last name</label>
              <input
                type="text"
                class="form-control"
                id="validationCustom02"
                required
              />
              <div class="valid-feedback">Looks good!</div>
            </div>
          </div>

          <div class="form-row">
            <div class="col-md-6 mb-3">
              <label for="validationCustom01">Email</label>
              <input
                type="email"
                class="form-control"
                id="validationCustom01"
                required
              />
              <div class="valid-feedback">Looks good!</div>
            </div>

            <div class="col-md-6 mb-3">
              <label for="validationCustom02">Phone Number</label>
              <input
                type="number"
                class="form-control"
                id="validationCustom02"
                required
              />
              <div class="valid-feedback">Looks good!</div>
            </div>
          </div>

          <div class="form-row">
            <div class="col-md-2 mb-3">
              <label for="validationCustom04">Day Of birth</label>
              <select class="custom-select" id="validationCustom04" required>
                <option selected value="1">
                  1
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
              <div class="invalid-feedback">Please select</div>
            </div>

            <div class="col-md-2 mb-3">
              <label for="validationCustom04">Months Of birth</label>
              <select class="custom-select" id="validationCustom04" required>
                <option selected value="01">
                  January
                </option>
                <option value="02">February </option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
              <div class="invalid-feedback">Please select</div>
            </div>

            <div class="col-md-2 mb-3">
              <label for="validationCustom04">Year Of birth</label>
              <select class="custom-select" id="validationCustom04" required>
                <option value="1981">1981</option>
                <option value="1982">1982</option>
                <option value="1983">1983</option>
                <option value="1984">1984</option>
                <option value="1985">1985</option>
                <option value="1986">1986</option>
                <option value="1987">1987</option>
                <option value="1988">1988</option>
                <option value="1989">1989</option>
                <option value="1990">1990</option>
                <option value="1991">1991</option>
                <option value="1992">1992</option>
                <option value="1993">1993</option>
                <option value="1994">1994</option>
                <option value="1995">1995</option>
                <option value="1996">1996</option>
                <option value="1997">1997</option>
                <option value="1998">1998</option>
                <option value="1999">1999</option>
                <option value="2000">2000</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2003">2003</option>
                <option value="2004">2004</option>
                <option value="2005">2005</option>
                <option value="2006">2006</option>
                <option value="2007">2007</option>
                <option value="2008">2008</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
              </select>
              <div class="invalid-feedback">Please select</div>
            </div>

            <div class="col-md-6 mb-3">
              <label for="validationCustom04">Select Gender</label>
              <select class="custom-select" id="validationCustom04" required>
                <option value="1" selected>
                  male
                </option>
                <option value="2">female </option>
              </select>
              <div class="invalid-feedback">Please select</div>
            </div>
          </div>

          <div class="form-row">
            <div class="col-md-6 mb-3">
              <label for="validationCustom01">Address line 1:</label>
              <input
                type="text"
                class="form-control"
                id="validationCustom01"
                required
              />
              <div class="valid-feedback">Looks good!</div>
            </div>

            <div class="col-md-6 mb-3">
              <label for="validationCustom02">Country/Region</label>
              <input
                type="text"
                class="form-control"
                id="validationCustom02"
                required
              />
              <div class="valid-feedback">Looks good!</div>
            </div>
          </div>

          <div class="form-row">
            <div class="col-md-6 mb-3">
              <label for="validationCustom01">City</label>
              <input
                type="text"
                class="form-control"
                id="validationCustom01"
                required
              />
              <div class="valid-feedback">Looks good!</div>
            </div>

            <div class="col-md-6 mb-3">
              <label for="validationCustom02">Postcode</label>
              <input
                type="text"
                class="form-control"
                id="validationCustom02"
                required
              />
              <div class="valid-feedback">Looks good!</div>
            </div>
          </div>

          <button className="btn-nxt" type="submit">
            Next
          </button>
        </form>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default MembershipForm;
