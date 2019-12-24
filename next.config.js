// must restart server whenever you make changes in next.config
//Sample on how to build DB security on serverside
module.exports = {
  env: {
    MONGO_SRV: "mongodb+srv://name:pw@cluster0-dkixg.mongodb.net/test?retryWrites=true&w=majority",
    JWT_SECRET: "yourtoken",
    CLOUDINARY_URL: "https://api.cloudinary.com/v1_1/name/image/upload",
    STRIPE_SECRET_KEY: "yourstripekey"
  }
};

