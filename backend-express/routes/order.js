var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log('order....');
  try {
      let
      formData = req.body,
      messageError = [];
      [
        'firstName',
        'lastName',
        'billingCity',
        'billingAddress1',
        'billingState',
        'country',
        'phone',
        'shippingAddress1',
        'quantity',
        'shippingCity',
        'shippingState',
         "language",
         "country",

      ].forEach(fieldName => {
        if (formData[fieldName] == null || formData[fieldName] == '') {
          messageError.push(`Field ${fieldName} can't be null!`);
        }
      });
      if (!/\@/.test(formData.email)) {
        messageError.push(`Email is invalid`);
      }
      if (formData.zipcode && formData.zipcode.length > 6) {
        messageError.push(`zip is invalid`);
      }
      if (formData.shippingCity && formData.shippingCity.length > 3) {
        messageError.push(`City is invalid`);
      }
      if (formData.shippingState && formData.shippingState.length >= 2) {
        messageError.push(`State is invalid`);
      }

      if (messageError.length && messageError.length > 0) {
          throw new Error(messageError.join('\n'));
      }
      //nessa linha esta salvando o ordem
      res.status(200).json({ statusCode: 200, message: 'Success! o/'});
  }
  catch (err) {
      res.status(400).json({ statusCode: 400, message: err.message });
  }
});

module.exports = router;
