const ajvInstance = require('./ajv-instance');

const schema = {
  type: 'object',
  properties: {
    first_name: { type: 'string' },
    last_name: { type: 'string' },
    gender: { type: 'string' },    
    email: { type: 'string', format: 'email' },
    mobile:{type:'number', minLength: 10, maxLength:10},
    alternative_no:{type:'number',minLength: 10, maxLength:10},
    profile_photo:{type:'string'},
     
  },
  required: ['first_name', 'last_name', 'gender', 'email','mobile','alternative_no'],
};

module.exports = ajvInstance.compile(schema);

 