import React from 'react';
import './App.css';
import { Input } from 'reactstrap'
import InputComponet from './components/InputComponet'

import logo from './img/logo.png';
import validate from './components/validate'
import salveFields from './components/salveFields'




class Formulario extends React.Component {

  state = {
    form: {
      firstName: null,
      lastName: null,
      email: null,
      phone: null,
      language: null,
      country: null,
      billingAddress1: null,
      billingAddress2: null,
      billingCity: null,
      billingState: null,
      billingZipCode: null,
      shippingAddress1: null,
      shippingAddress2: null,
      shippingCity: null,
      shippingState: null,
      shippingAddressUse: null,
      fuelCut: null,
      identifyDrivers: null,
      trackers: null,
      quantity: null
    },
    erros: {},
  }



  onChange = (field, ev) => {
    const { form } = this.state;
    form[field] = ev.target.value;
    this.setState({ form }, (() => {
      validate(this);
    }).bind(this))
  }

  handleSubmit = () => {
    const { form } = this.state;
    if (!validate(this)) return null;
    this.props.addNewOrder(form)
  }

  render() {
    const { form, erros } = this.state
    return (

      <div className="Formulario " method="post">
    <div className="container" >
        <div> <img src={logo} alt="logo" /></div></div>
        <div className="container-fluid" >
          <div className="container" >

            <div className="row" >

              <div className="col-md-6">

                <label>Contact Information:</label><br />

                <div className="row">
                  <div className="col">
                    <InputComponet
                      className="form-group" value={form.firstName}
                      onChange={(ev) => this.onChange('firstName', ev)}
                      placeholder={"First Name:"} erro={erros.firstName} />

                    <InputComponet
                      className="form-group" value={form.lastName}
                      onChange={(ev) => this.onChange('lastName', ev)}
                      placeholder={"Last Name:"} erro={erros.lastName} /><br />
                  </div>
                </div>
                <InputComponet value={form.email}
                  onChange={(ev) => this.onChange('email', ev)}
                  placeholder={"Email"} type={"email"} erro={erros.email} />

                <InputComponet value={form.phone}
                  onChange={(ev) => this.onChange('phone', ev)}
                  placeholder={"Phone:"} erro={erros.phone} /><br />



                <div className="row">
                  <div className="col">
                    <select value={form.linguage} type={"select"}
                      onChange={(ev) => this.onChange('linguage', ev)}
                      placeholder={"Linguage:"} erro={erros.linguage}>
                      <option value="Linguage">Linguage</option>
                      <option value="spanish">Spanish</option>
                      <option value="port">Brazil</option>
                      <option value="english">English</option>
                    </select>


                    <select value={form.country}
                      className="form-group" type={"select"}
                      onChange={(ev) => this.onChange('country', ev)}
                      placeholder={"Country"} erro={erros.country}>
                      <option value="country">country</option>
                      <option value="Brazil">Brazil</option>
                      <option value="Spain">Spain</option>
                      <option value="United States">United States</option>
                    </select>

                  </div>
                </div>

                <label>Billing Address:</label><br />

                <div className="row">
                  <div className="col">

                    <InputComponet className="form-group"
                      value={form.billingAddress1}
                      onChange={(ev) => this.onChange('billingAddress1', ev)}
                      placeholder={"Address Line 1:"} erro={erros.billingAddress1} />

                    <InputComponet value={form.billingAddress2} className="form-group"
                      onChange={(ev) => this.onChange('billingAddress2', ev)}
                      placeholder={"Address Line 2:"} /><br />
                  </div>
                </div>
                <InputComponet value={form.billingCity}
                  onChange={(ev) => this.onChange('billingCity', ev)}
                  placeholder={"City:"} erro={erros.billingCity} />

                <InputComponet value={form.billingState}
                  onChange={(ev) => this.onChange('billingState:', ev)}
                  placeholder={"State:"} erro={erros.billingState} />

                <InputComponet value={form.billingZipCode}
                  onChange={(ev) => this.onChange('billingZipCode:', ev)}
                  placeholder={"Zip Code:"}  />

                <InputComponet value={form.shippingAddressUse}
                  onChange={(ev) => this.onChange('shippingAddressUse:', ev)}
                  type={"checkbox"} /><span>Use shipping address same as billing address</span>
              </div>
              <div className="col-md-6">
                <label>Shipping Address:</label><br />

                <InputComponet
                  value={form.shippingAddress1}
                  onChange={(ev) => this.onChange('shippingAddress1', ev)}
                  placeholder={"Address Line 1:"} erro={erros.shippingAddress1} /> <br />


                <InputComponet value={form.shippingAddress2}
                  onChange={(ev) => this.onChange('shippingAddress2', ev)}
                  placeholder={"Address Line 2:"} /><br />


                <InputComponet value={form.shippingCity}
                  onChange={(ev) => this.onChange('shippingCity', ev)}
                  placeholder={"City:"} erro={erros.shippingCity} />

                <InputComponet value={form.shippingState}
                  onChange={(ev) => this.onChange('shippingState:', ev)}
                  placeholder={"State:"}  erro={erros.shippingState}/>

                <InputComponet value={form.shippingZipCode}
                  onChange={(ev) => this.onChange('shippingZipCode:', ev)}
                  placeholder={"Zip Code:"} /><br />
                <label>Check the boxes below:</label><br />
                <InputComponet
                  value={form.fuelCut} id="fuelCut"
                  onChange={(ev) => this.onChange('fuelCut:', ev)}
                  type={"checkbox"} /><span for="fuelCut" >Does any vehicle need to be equiped with a fuel cut off device?</span><br />
                <InputComponet value={form.identifyDrivers} id="identifyDrivers"
                  onChange={(ev) => this.onChange('identifyDrivers:', ev)}
                  type={"checkbox"} /><span>Will you need to identify the fleet drivers?</span><br />


                <InputComponet value={form.trackers} id="trackers"
                  onChange={(ev) => this.onChange('trackers:', ev)}
                  type={"checkbox"} /><span>Will any trackers be installed on a bike, truck or machinery?</span><br /><br />

                <InputComponet value={form.quantity}
                  onChange={(ev) => this.onChange('quantity:', ev)}
               
               type={"number"} placeholder={"How many trackers would you like to purchase?"} /><br />
              
              
              </div>
         
              <div>
              </div>
          
            </div>
            <button onClick={() => {
            salveFields(this).then(response => {
              if (response.statusCode === 400) alert(response.message);
            });
          }}> Order Now </button>
          </div>
    
      </div>
         
        </div>
      



    )
  }
}

export default (Formulario);
