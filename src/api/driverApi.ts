import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const getDriverDeliveries = async (token: string) => {
  try {
    const response = await axios.get(`${API_URL}/driver/deliveries`, {
      headers: {
        Authorization: `${token}`, // 토큰 인증 (Bearer 방식)
      },
    });
    console.log("Driver deliveries fetched:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching driver deliveries", error);
    throw new Error("Failed to fetch driver deliveries");
  }
};

const markDelivered = async (token: string, deliveryId: number) => {
  try {
    const response = await axios.post(
      `${API_URL}/driver/mark_delivered`,
      { delivery_id: deliveryId }, // 요청 본문에 delivery_id 포함
      {
        headers: {
          Authorization: `${token}`, // 토큰 인증 (Bearer 방식)
        },
      }
    );
    console.log("Delivery marked as delivered:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error marking delivery as delivered", error);
    throw new Error("Failed to mark delivery as delivered");
  }
};

export { getDriverDeliveries, markDelivered };
