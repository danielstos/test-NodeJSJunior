
   function salveFields(comp) {
  
    const { form } = comp.state;
    return new Promise((resolve, reject) => {
      fetch(`http://localhost:3000/order`, {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      }).then(response => response.json())
        .then(response => resolve(response))
        .catch(error => { console.log(error); reject(error); });

    })
    comp.handleSubmit();
  }

  export default salveFields;
  
  
