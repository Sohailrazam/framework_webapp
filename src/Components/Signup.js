// import {Col , Row , CustomInput, Button , Container } from 'reactstrap';
import './Signup.css'
import {Col , Row ,Form, FormGroup, Label, Input, FormText, CustomInput, Button , Container } from 'reactstrap';

import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import APIService from './api'
import { useAlert } from 'react-alert'

export const Signup = () => {
const [first_name, setFirstname] = useState('');
const [last_name, setLastname] = useState('');
const [email, setEmail] = useState('');
const [street, setStreet] = useState('');
const [street_number, setStreetNumber] = useState('');
const [zip_code, setZipCode] = useState('');
const [city, setCity] = useState('');
const [country, setCountry] = useState('');
const [password1, setPassword] = useState('');
const [password2, setConfirmPassword] = useState('');
const [data, SetData] = useState([])
const [cusActive,checkHandler]=useState(false);

const [responseData, SetResponseData] = useState([]);
let history = useHistory();
const alert = useAlert()
const [checked, setChecked] = useState(true);

useEffect(() => {
  console.log(responseData.status);
  if (responseData.status === 201) {
   //activation page
   history.push('/activation');
   alert.success('You are successfully Register!');
  }
  else if(responseData.status === 400) {
    console.log("registration fail")
    alert.error('Something Wrong!');
    //
  }
   else {
    console.log("Fields error");
   }
}, [responseData.status])


  const register = () => {
    if(checked === false){
      APIService.RegisterUser({first_name,last_name,email,street,street_number,zip_code,city,country, password1,password2})
    .then(response => {SetData(response.json().then(resp => {SetData(resp);
    SetResponseData(response);
    }))})
    }
    else{
      alert.error("Verify that you are not robot !");
    }
    
  }

  return (
    <Container className="themed-container" fluid={true}>
    
       <div className="setsignup">
       <div className="cardsignup">
      <h4 className="reg">Register</h4>
      <form>

        <Row>
      <Col>
      <div className="form-group text-left">
          <label className="font_all_lbl" >First Name</label>
          <input
            required
            type="Fname"
            className="form-control style_input"
            placeholder="Enter first name"
            onChange={e => setFirstname(e.target.value)}
                      />
     {data.first_name && <span style={{color:'white', fontStyle:'italic', fontSize:'12px'}}>{data.first_name}</span>}
        
        </div>
      </Col>

      <Col>
      <div className="form-group text-left">
          <label className="font_all_lbl"  >Last Name</label>
          <input
            type="Lname"
            required
            className="form-control style_input"
            placeholder="Enter last name"
            onChange={e => setLastname(e.target.value)}
                      />
            {data.last_name && <span style={{color:'white', fontStyle:'italic', fontSize:'12px'}}>{data.last_name}</span>}
        </div>
      </Col>
      </Row>
        

        
        <div className="form-group text-left">
          <label className="font_all_lbl" >Email</label>
          <input
            type="email"
            required
            className="form-control style_input"
            placeholder="Enter your email"
            onChange={e => setEmail(e.target.value)}
          />    
          {data.email && <span style={{color:'white', fontStyle:'italic', fontSize:'12px'}}>{data.email}</span>}
        </div>
      
        <div className="form-group text-left">
          <label className="font_all_lbl" >Password</label>
          <input
            type="password"
            required
            className="form-control style_input"
            placeholder="Enter your password"
            onChange={e => setPassword(e.target.value)}
            
          />
          {data.password1 && <span style={{color:'white', fontStyle:'italic', fontSize:'12px'}}>{data.password1}</span>}    
        </div>
        <div className="form-group text-left">
          <label className="font_all_lbl" >Repeat Password</label>
          <input
            type="password"
            required
            className="form-control style_input"
            placeholder="Confirm your password"
            onChange={e => setConfirmPassword(e.target.value)}
          />    
          {data.non_field_errors && <span style={{color:'white', fontStyle:'italic', fontSize:'12px'}}>{data.non_field_errors}</span>}
        
        </div>
        <Row>
      <Col>
      <div className="form-group text-left">
          <label className="font_all_lbl" >Street</label>
          <input
          required
            type="Street"
            className="form-control style_input"
            placeholder="Enter Street name"
            onChange={e => setStreet(e.target.value)}
                      />
        {data.street && <span style={{color:'white', fontStyle:'italic', fontSize:'12px'}}>{data.street}</span>}
        </div>
      </Col>

      <Col xs="auto">
      <div className="form-group text-left">
          <label className="font_all_lbl" >Street Number</label>
          <input
            type="Number"
            required  
            className="form-control form-control-nmbr style_input"
            placeholder="Enter Street Number"
            onChange={e => setStreetNumber(e.target.value)}
                      />
            {data.street_number && <span style={{color:'white', fontStyle:'italic', fontSize:'12px'}}>{data.street_number}</span>}
        </div>
      
      </Col>
     
      </Row>
        
        {/* <span style={{textAlign:'left'}} color="secondary"style={{ color:"white",  backgroundColor:'#32324d'}} className="btnedited">  */}
        {/* <input type="checkbox" id="periph2" name="peripherals" value="keyboard"></input> */}
        {/* <CustomInput type="checkbox" id="exampleCustomCheckbox2" label="I &#039; m not robot" />  */}
          {/* </span> */}
          
      <Row>
      <Col>
         
      <div className="form-group text-left">
          <label className="font_all_lbl">City</label>
          <input
            type="text"
            required
            className="form-control style_input"
            placeholder="Enter Your City Name"
            onChange={e => setCity(e.target.value)}
            />    
            {data.city && <span style={{color:'white', fontStyle:'italic', fontSize:'12px'}}>{data.city}</span>}
        </div>
            </Col>
      </Row>
      <Row>
      <Col xs="auto">
      <div className="form-group text-left">
          <label className="font_all_lbl"  >ZIP Code</label>
          <input
            type="Number"
            required  
            className="form-control style_input"
            placeholder="Zip Code"
            onChange={e => setZipCode(e.target.value)}
                      />
        {data.zip_code && <span style={{color:'white', fontStyle:'italic', fontSize:'12px'}}>{data.zip_code}</span>}
        </div>
      
      </Col>
      <Col>
      <div className="form-group text-left">
          <label className="font_all_lbl" >Country</label>
          <FormGroup>
        <Input className="form-control style_input"
 type="select" name="select" id="exampleSelect" style={{backgroundColor:'transparent',color:'white'}} onChange={e => setCountry(e.target.value)}>
          <option value="" selected="selected">United State America</option>
<option value="United Kingdom">United Kingdom</option> 
<option value="Afghanistan">Afghanistan</option> 
<option value="Albania">Albania</option> 
<option value="Algeria">Algeria</option> 
<option value="American Samoa">American Samoa</option> 
<option value="Andorra">Andorra</option> 
<option value="Angola">Angola</option> 
<option value="Anguilla">Anguilla</option> 
<option value="Antarctica">Antarctica</option> 
<option value="Antigua and Barbuda">Antigua and Barbuda</option> 
<option value="Argentina">Argentina</option> 
<option value="Armenia">Armenia</option> 
<option value="Aruba">Aruba</option> 
<option value="Australia">Australia</option> 
<option value="Austria">Austria</option> 
<option value="Azerbaijan">Azerbaijan</option> 
<option value="Bahamas">Bahamas</option> 
<option value="Bahrain">Bahrain</option> 
<option value="Bangladesh">Bangladesh</option> 
<option value="Barbados">Barbados</option> 
<option value="Belarus">Belarus</option> 
<option value="Belgium">Belgium</option> 
<option value="Belize">Belize</option> 
<option value="Benin">Benin</option> 
<option value="Bermuda">Bermuda</option> 
<option value="Bhutan">Bhutan</option> 
<option value="Bolivia">Bolivia</option> 
<option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option> 
<option value="Botswana">Botswana</option> 
<option value="Bouvet Island">Bouvet Island</option> 
<option value="Brazil">Brazil</option> 
<option value="British Indian Ocean Territory">British Indian Ocean Territory</option> 
<option value="Brunei Darussalam">Brunei Darussalam</option> 
<option value="Bulgaria">Bulgaria</option> 
<option value="Burkina Faso">Burkina Faso</option> 
<option value="Burundi">Burundi</option> 
<option value="Cambodia">Cambodia</option> 
<option value="Cameroon">Cameroon</option> 
<option value="Canada">Canada</option> 
<option value="Cape Verde">Cape Verde</option> 
<option value="Cayman Islands">Cayman Islands</option> 
<option value="Central African Republic">Central African Republic</option> 
<option value="Chad">Chad</option> 
<option value="Chile">Chile</option> 
<option value="China">China</option> 
<option value="Christmas Island">Christmas Island</option> 
<option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option> 
<option value="Colombia">Colombia</option> 
<option value="Comoros">Comoros</option> 
<option value="Congo">Congo</option> 
<option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option> 
<option value="Cook Islands">Cook Islands</option> 
<option value="Costa Rica">Costa Rica</option> 
<option value="Cote D'ivoire">Cote D'ivoire</option> 
<option value="Croatia">Croatia</option> 
<option value="Cuba">Cuba</option> 
<option value="Cyprus">Cyprus</option> 
<option value="Czech Republic">Czech Republic</option> 
<option value="Denmark">Denmark</option> 
<option value="Djibouti">Djibouti</option> 
<option value="Dominica">Dominica</option> 
<option value="Dominican Republic">Dominican Republic</option> 
<option value="Ecuador">Ecuador</option> 
<option value="Egypt">Egypt</option> 
<option value="El Salvador">El Salvador</option> 
<option value="Equatorial Guinea">Equatorial Guinea</option> 
<option value="Eritrea">Eritrea</option> 
<option value="Estonia">Estonia</option> 
<option value="Ethiopia">Ethiopia</option> 
<option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option> 
<option value="Faroe Islands">Faroe Islands</option> 
<option value="Fiji">Fiji</option> 
<option value="Finland">Finland</option> 
<option value="France">France</option> 
<option value="French Guiana">French Guiana</option> 
<option value="French Polynesia">French Polynesia</option> 
<option value="French Southern Territories">French Southern Territories</option> 
<option value="Gabon">Gabon</option> 
<option value="Gambia">Gambia</option> 
<option value="Georgia">Georgia</option> 
<option value="Germany">Germany</option> 
<option value="Ghana">Ghana</option> 
<option value="Gibraltar">Gibraltar</option> 
<option value="Greece">Greece</option> 
<option value="Greenland">Greenland</option> 
<option value="Grenada">Grenada</option> 
<option value="Guadeloupe">Guadeloupe</option> 
<option value="Guam">Guam</option> 
<option value="Guatemala">Guatemala</option> 
<option value="Guinea">Guinea</option> 
<option value="Guinea-bissau">Guinea-bissau</option> 
<option value="Guyana">Guyana</option> 
<option value="Haiti">Haiti</option> 
<option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option> 
<option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option> 
<option value="Honduras">Honduras</option> 
<option value="Hong Kong">Hong Kong</option> 
<option value="Hungary">Hungary</option> 
<option value="Iceland">Iceland</option> 
<option value="India">India</option> 
<option value="Indonesia">Indonesia</option> 
<option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option> 
<option value="Iraq">Iraq</option> 
<option value="Ireland">Ireland</option> 
<option value="Israel">Israel</option> 
<option value="Italy">Italy</option> 
<option value="Jamaica">Jamaica</option> 
<option value="Japan">Japan</option> 
<option value="Jordan">Jordan</option> 
<option value="Kazakhstan">Kazakhstan</option> 
<option value="Kenya">Kenya</option> 
<option value="Kiribati">Kiribati</option> 
<option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option> 
<option value="Korea, Republic of">Korea, Republic of</option> 
<option value="Kuwait">Kuwait</option> 
<option value="Kyrgyzstan">Kyrgyzstan</option> 
<option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option> 
<option value="Latvia">Latvia</option> 
<option value="Lebanon">Lebanon</option> 
<option value="Lesotho">Lesotho</option> 
<option value="Liberia">Liberia</option> 
<option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option> 
<option value="Liechtenstein">Liechtenstein</option> 
<option value="Lithuania">Lithuania</option> 
<option value="Luxembourg">Luxembourg</option> 
<option value="Macao">Macao</option> 
<option value="North Macedonia">North Macedonia</option> 
<option value="Madagascar">Madagascar</option> 
<option value="Malawi">Malawi</option> 
<option value="Malaysia">Malaysia</option> 
<option value="Maldives">Maldives</option> 
<option value="Mali">Mali</option> 
<option value="Malta">Malta</option> 
<option value="Marshall Islands">Marshall Islands</option> 
<option value="Martinique">Martinique</option> 
<option value="Mauritania">Mauritania</option> 
<option value="Mauritius">Mauritius</option> 
<option value="Mayotte">Mayotte</option> 
<option value="Mexico">Mexico</option> 
<option value="Micronesia, Federated States of">Micronesia, Federated States of</option> 
<option value="Moldova, Republic of">Moldova, Republic of</option> 
<option value="Monaco">Monaco</option> 
<option value="Mongolia">Mongolia</option> 
<option value="Montserrat">Montserrat</option> 
<option value="Morocco">Morocco</option> 
<option value="Mozambique">Mozambique</option> 
<option value="Myanmar">Myanmar</option> 
<option value="Namibia">Namibia</option> 
<option value="Nauru">Nauru</option> 
<option value="Nepal">Nepal</option> 
<option value="Netherlands">Netherlands</option> 
<option value="Netherlands Antilles">Netherlands Antilles</option> 
<option value="New Caledonia">New Caledonia</option> 
<option value="New Zealand">New Zealand</option> 
<option value="Nicaragua">Nicaragua</option> 
<option value="Niger">Niger</option> 
<option value="Nigeria">Nigeria</option> 
<option value="Niue">Niue</option> 
<option value="Norfolk Island">Norfolk Island</option> 
<option value="Northern Mariana Islands">Northern Mariana Islands</option> 
<option value="Norway">Norway</option> 
<option value="Oman">Oman</option> 
<option value="Pakistan">Pakistan</option> 
<option value="Palau">Palau</option> 
<option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option> 
<option value="Panama">Panama</option> 
<option value="Papua New Guinea">Papua New Guinea</option> 
<option value="Paraguay">Paraguay</option> 
<option value="Peru">Peru</option> 
<option value="Philippines">Philippines</option> 
<option value="Pitcairn">Pitcairn</option> 
<option value="Poland">Poland</option> 
<option value="Portugal">Portugal</option> 
<option value="Puerto Rico">Puerto Rico</option> 
<option value="Qatar">Qatar</option> 
<option value="Reunion">Reunion</option> 
<option value="Romania">Romania</option> 
<option value="Russian Federation">Russian Federation</option> 
<option value="Rwanda">Rwanda</option> 
<option value="Saint Helena">Saint Helena</option> 
<option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option> 
<option value="Saint Lucia">Saint Lucia</option> 
<option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option> 
<option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option> 
<option value="Samoa">Samoa</option> 
<option value="San Marino">San Marino</option> 
<option value="Sao Tome and Principe">Sao Tome and Principe</option> 
<option value="Saudi Arabia">Saudi Arabia</option> 
<option value="Senegal">Senegal</option> 
<option value="Serbia and Montenegro">Serbia and Montenegro</option> 
<option value="Seychelles">Seychelles</option> 
<option value="Sierra Leone">Sierra Leone</option> 
<option value="Singapore">Singapore</option> 
<option value="Slovakia">Slovakia</option> 
<option value="Slovenia">Slovenia</option> 
<option value="Solomon Islands">Solomon Islands</option> 
<option value="Somalia">Somalia</option> 
<option value="South Africa">South Africa</option> 
<option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option> 
<option value="Spain">Spain</option> 
<option value="Sri Lanka">Sri Lanka</option> 
<option value="Sudan">Sudan</option> 
<option value="Suriname">Suriname</option> 
<option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option> 
<option value="Swaziland">Swaziland</option> 
<option value="Sweden">Sweden</option> 
<option value="Switzerland">Switzerland</option> 
<option value="Syrian Arab Republic">Syrian Arab Republic</option> 
<option value="Taiwan, Province of China">Taiwan, Province of China</option> 
<option value="Tajikistan">Tajikistan</option> 
<option value="Tanzania, United Republic of">Tanzania, United Republic of</option> 
<option value="Thailand">Thailand</option> 
<option value="Timor-leste">Timor-leste</option> 
<option value="Togo">Togo</option> 
<option value="Tokelau">Tokelau</option> 
<option value="Tonga">Tonga</option> 
<option value="Trinidad and Tobago">Trinidad and Tobago</option> 
<option value="Tunisia">Tunisia</option> 
<option value="Turkey">Turkey</option> 
<option value="Turkmenistan">Turkmenistan</option> 
<option value="Turks and Caicos Islands">Turks and Caicos Islands</option> 
<option value="Tuvalu">Tuvalu</option> 
<option value="Uganda">Uganda</option> 
<option value="Ukraine">Ukraine</option> 
<option value="United Arab Emirates">United Arab Emirates</option> 
<option value="United Kingdom">United Kingdom</option> 
<option value="United States">United States</option> 
<option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option> 
<option value="Uruguay">Uruguay</option> 
<option value="Uzbekistan">Uzbekistan</option> 
<option value="Vanuatu">Vanuatu</option> 
<option value="Venezuela">Venezuela</option> 
<option value="Viet Nam">Viet Nam</option> 
<option value="Virgin Islands, British">Virgin Islands, British</option> 
<option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option> 
<option value="Wallis and Futuna">Wallis and Futuna</option> 
<option value="Western Sahara">Western Sahara</option> 
<option value="Yemen">Yemen</option> 
<option value="Zambia">Zambia</option> 
<option value="Zimbabwe">Zimbabwe</option>
        </Input>
        {data.country && <span style={{color:'white', fontStyle:'italic', fontSize:'12px'}}>{data.country}</span>}
       
      </FormGroup>
          {/* <input
          required
            type="Select"
            className="form-control style_input"
            placeholder="Enter Street name"
      
                      /> */}
                    
        </div>
      </Col>

   
      {/* <Col xs="3">.col-3</Col>
        <Col xs="auto">.col-auto - variable width content</Col>
        <Col xs="3">.col-3</Col> */}
      </Row>
      
          <Row>
          
            <Col>
          <div style={{color: '#F0F0FF',textAlign:'left', paddingTop:"20px"}}>
        {/* <CustomInput className="custom-control-label-sign-up" type="checkbox" id="exampleCustomCheckbox2" label="I &#039;m not robot"  */}
        
          <img src={cusActive?"/signup-c.svg":"/unch.svg"}onClick={()=>checkHandler(!cusActive)
            
        }
        onChange={() => {
          setChecked(!checked);
          console.log(checked)
        }}/> 
        <Label style={{color: '#F0F0FF',paddingLeft:'14px'}}>I &#039;m not robot</Label>
          </div>
            </Col>
            <Col>
        <p className="btn_reg_cls" style={{textAlign:'right',paddingTop:'13px'}}>
        <Button color="secondary"style={{ color: '#F0F0FF',  backgroundColor:' rgba(99, 99, 128, 0.1)'  }} className="submit_reg" onClick={register}>Register</Button>
        </p>
            </Col>
          </Row>
        
      </form>
    </div>
    </div>
    
    </Container>
  );
};
