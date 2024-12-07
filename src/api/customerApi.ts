import axios from "axios";
import { BoughtListResponse, DeliveryStatusResponse, Order } from "./types";

const API_URL = process.env.REACT_APP_API_URL;

const getProductList = async () => {
  try {
    const response = await axios.get(`${API_URL}/customers/product_list`);
    return response.data.products;
  } catch (error) {
    console.error("Error fetching product list:", error);
    throw error;
  }
};

const buyProduct = async (productId: number, token: string) => {
  try {
    const response = await axios.post(
      `${API_URL}/customers/buy?product_id=${productId}`,
      {},
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error purchasing product:", error);
    throw error;
  }
};

const getPurchasedProducts = async (accessToken: string) => {
  try {
    const response = await axios.get(
      `${API_URL}/customers/purchased_products`,
      {
        headers: {
          Authorization: `${accessToken}`, // Authorization 헤더에 토큰 추가
        },
      }
    );
    return response.data; // 구매한 상품 리스트 반환
  } catch (error) {
    console.error("Error fetching purchased products:", error);
    throw error;
  }
};

const getBoughtList = async (
  name: string,
  phoneNumber: string
): Promise<Order[]> => {
  try {
    const response = await axios.post<BoughtListResponse>(
      `${API_URL}/customers/bought_list`,
      {
        name,
        phone_number: phoneNumber,
      }
    );

    return response.data.orders;
  } catch (error) {
    console.error("Error fetching bought list:", error);
    throw error;
  }
};

const getDeliveryStatus = async (accessToken: string) => {
  try {
    const response = await axios.get(`${API_URL}/customers/delivery_status`, {
      headers: {
        Authorization: `${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching delivery status:", error);
    throw error;
  }
};
export {
  getProductList,
  buyProduct,
  getPurchasedProducts,
  getBoughtList,
  getDeliveryStatus,
};
