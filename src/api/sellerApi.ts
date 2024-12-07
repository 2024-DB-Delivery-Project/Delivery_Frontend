import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const getSellerOrders = async (accessToken: string) => {
  try {
    const response = await axios.get(`${API_URL}/seller/orders`, {
      headers: {
        Authorization: `${accessToken}`, // Authorization 헤더에 토큰 추가
      },
    });
    return response.data.orders;
  } catch (error) {
    console.error("Error fetching seller orders:", error);
    throw error;
  }
};

const selectLogistic = async (orderId: number) => {
  console.log("orderId", orderId);
  try {
    const response = await axios.post(`${API_URL}/seller/select_logistic`, {
      order_id: orderId,
    });
    console.log("Logistic selected:", response);
    return response;
  } catch (error) {
    console.error("Error updating logistic", error);
    throw new Error("Failed to update logistic");
  }
};

export { getSellerOrders, selectLogistic };
