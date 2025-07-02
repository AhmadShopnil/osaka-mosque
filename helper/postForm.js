"use client";

export const postForm = async (endpoint, formData) => {
  try {
    const res = await axiosInstance.post(endpoint, formData);
    return {
      success: true,
      message: res.data.message || "Submitted successfully",
    };
  } catch (error) {
    const message = error.response?.data?.message || "Submission failed";
    return { success: false, message };
  }
};