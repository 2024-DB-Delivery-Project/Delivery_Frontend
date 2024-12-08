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

const getDeliveryStatus = async (trackingNumber: number) => {
  try {
    const response = await axios.post(`${API_URL}/seller/get_delivery_status`, {
      tracking_number: trackingNumber,
    });
    console.log("Delivery status fetched:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching delivery status", error);
    throw new Error("Failed to fetch delivery status");
  }
};

const getLogisticDeliveries = async (token: string) => {
  try {
    const response = await axios.get(`${API_URL}/logistic/deliveries`, {
      headers: {
        Authorization: `${token}`, // 토큰 인증
      },
    });
    console.log("Logistic deliveries fetched:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching logistic deliveries", error);
    throw new Error("Failed to fetch logistic deliveries");
  }
};

const getDriversByCity = async (city: string) => {
  try {
    const response = await axios.get(`${API_URL}/logistic/by_city`, {
      params: { city },
    });

    console.log("Drivers fetched by city:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching drivers by city", error);
    throw new Error("Failed to fetch drivers by city");
  }
};

const assignDriver = async (deliveryId: number, driverId: number) => {
  try {
    const response = await axios.post(`${API_URL}/logistic/assign_driver`, {
      delivery_id: deliveryId,
      driver_id: driverId,
    });

    if (response.data.msg === "Driver assigned successfully") {
      console.log("Driver assigned successfully:", response.data);
      return response.data;
    } else {
      throw new Error("Failed to assign driver");
    }
  } catch (error) {
    console.error("Error assigning driver:", error);
    throw new Error("Failed to assign driver");
  }
};

export {
  getSellerOrders,
  selectLogistic,
  getDeliveryStatus,
  getLogisticDeliveries,
  getDriversByCity,
  assignDriver,
};
