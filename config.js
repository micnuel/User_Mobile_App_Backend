const env = process.env;

export default{
    mongodbUri: 'mongodb://emmanuel:Mongodb11.@userapp-shard-00-00-epqyj.mongodb.net:27017,userapp-shard-00-01-epqyj.mongodb.net:27017,userapp-shard-00-02-epqyj.mongodb.net:27017/test?ssl=true&replicaSet=userApp-shard-0&authSource=admin',
    port:env.PORT || 8080,
    host: env.HOST || '0.0.0.0',
    get serverUrl(){
       return `http://${this.host}:${this.port}`;
    }
}