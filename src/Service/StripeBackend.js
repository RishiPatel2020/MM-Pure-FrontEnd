import axios from "axios";
const STRIPE_REST_API_URL = "http://localhost:5001/api/checkout/payment";

class StripeBackend {
  // sends token id, amount, email, to backend, then backend will create charge on stripe
  requestToServer(token, amount, setSuccessBody, setSuccessPopUp) {
    setSuccessBody("Processing....");
    setSuccessPopUp(true);
    return axios.post(STRIPE_REST_API_URL, {
      tokenId: token.id,
      amount: amount,
    });
  }
}

export default new StripeBackend();
