let API_HOST = ""
switch(process.env.NODE_ENV){
    case "development":
        API_HOST="/dev"
        break;
    case "production":
        API_HOST="/"
        break;
    default:
        API_HOST="/dev"
        break;
}
export default API_HOST
