// must restart server whenever you make changes in next.config
//Sample on how to build DB security on serverside
module.exports = {
  env: {
    MONGO_SRV: "mongodb+srv://ThiagoAlm:my123@cluster0-dkixg.mongodb.net/test?retryWrites=true&w=majority",
    JWT_SECRET: "jwtsecrettoken",
    CLOUDINARY_URL: "https://api.cloudinary.com/v1_1/thiagoa/image/upload",
    STRIPE_SECRET_KEY: "sk_test_Yc5W7RRMMrtc4rrPW7kbGE6L00h6gqvwLp"
  }
};

