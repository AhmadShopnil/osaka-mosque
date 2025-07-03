"use client"

import axiosInstance from "@/helper/axiosInstance";

export async function getSettings() {
  try {
    const response = await axiosInstance.get("/frontend/settings");
    return await response.data?.data || [];
  } catch (error) {
    console.error("Failed to fetch settings:", error);
    return [];
  }
}
