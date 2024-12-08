import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

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

export { getLogisticDeliveries, getDriversByCity, assignDriver };
