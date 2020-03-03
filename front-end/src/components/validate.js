
var validate = (comp) => {
    
  const { form } = comp.state;
    const erros = {};
    let fields = {
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      phone: 'Phone',
      language: 'Language',
      country: 'Country',
      billingAddress1: 'Billing Address1',
      billingCity: 'Billing City',
      billingState: 'Billing State',
      shippingAddress1: 'Shipping Address1',
      shippingCity: 'Shipping City',
      shippingState: 'Shipping State',
      quantity: 'Quantity of Trackers'
    };
    Object.keys(fields).forEach((item) => {
      if (!form[item]) erros[item] = "Digite o " + fields[item];
    })
    comp.setState({ erros });
    return Object.keys(erros).length === 0;
  }


  export default validate;


