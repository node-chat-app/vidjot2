if(process.env.NODE_ENV ==='production'){
  module.exports = {mongoURI:
  'mongodb://george:george03@ds137812.mlab.com:37812/vidjot-prod'}
}else{
  module.exports = {mongoURI:'mongodb://localhost/vidjot-dev'}
}