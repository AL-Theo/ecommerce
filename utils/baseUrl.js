//allows us to not have to write localhost blah blah
//just use variable "baseUrl" where urls are required
//It also verifies if we are using production or deployment

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://react-reserve.now.sh"
    : "http://localhost:3000";

export default baseUrl;