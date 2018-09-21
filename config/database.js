if(process.env.NODE_ENV ==='production'){
  module.exports = {mongoURI:
  'mongodb://pascals:george03@ds263832.mlab.com:63832/vidjot-2'}
}else{
  module.exports = {mongoURI:'mongodb://localhost/vidjot-dev'}
}