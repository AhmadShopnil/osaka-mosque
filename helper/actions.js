import { BASE_URL } from "./baseUrl";




export async function getSettings() {
const API_URL =`${BASE_URL}/api/v1/frontend/settings`;

  const res = await fetch(API_URL, {
    next: { revalidate: 30 }, 
  });
  const json = await res.json();
  return json?.data || [];
}


export async function getServices() {
const API_URL =`${BASE_URL}/api/v1/posts?term_type=services`;

  const res = await fetch(API_URL, {
    next: { revalidate: 30 }, 
  });
  const json = await res.json();
  return json?.data || [];
}


export async function getEvents() {
const API_URL =`${BASE_URL}/api/v1/posts?term_type=events`;

  const res = await fetch(API_URL, {
    next: { revalidate: 30 }, 
  });
  const json = await res.json();
  return json?.data || [];
}


export async function getSingleEvent(slug) {
const API_URL =`${BASE_URL}/api/v1/post?slug=${slug}`;

// console.log("from action slug", slug)
  const res = await fetch(API_URL, {
    next: { revalidate: 30 }, 
  });
  const json = await res.json();
// console.log("from action", json)

  return json?.data || {};
}


export async function getSliders() {
const API_URL =`${BASE_URL}/api/v1/posts?term_type=slider`;

  const res = await fetch(API_URL, {
    next: { revalidate: 30 }, 
  });
  const json = await res.json();
  return json?.data || [];
}

export async function getSingleSlider(slug) {
const API_URL =`${BASE_URL}/api/v1/post?slug=${slug}`;

// console.log("from action slug", slug)
  const res = await fetch(API_URL, {
    next: { revalidate: 30 }, 
  });
  const json = await res.json();
// console.log("from action", json)

  return json?.data || {};
}


export async function getScholars() {
const API_URL =`${BASE_URL}/api/v1/posts?term_type=scholars`;

  const res = await fetch(API_URL, {
    next: { revalidate: 30 }, 
  });
  const json = await res.json();
  return json?.data || [];
}


export async function getBlogs() {
const API_URL =`${BASE_URL}/api/v1/posts?term_type=post`;

  const res = await fetch(API_URL, {
    next: { revalidate: 30 }, 
  });
  const json = await res.json();
  return json?.data || [];
}


export async function getSingleBlog(slug) {
const API_URL =`${BASE_URL}/api/v1/post?slug=${slug}`;

// console.log("from action slug", slug)
  const res = await fetch(API_URL, {
    next: { revalidate: 30 }, 
  });
  const json = await res.json();
// console.log("from action", json)

  return json?.data || {};
}



export async function getPage(slug) {
const API_URL =`${BASE_URL}/api/v1/post?slug=${slug}`;

// console.log("from action slug", slug)
  const res = await fetch(API_URL, {
    next: { revalidate: 30 }, 
  });
  const json = await res.json();
// console.log("from action", json)

  return json?.data || {};
}


export async function getPillarOfIslam() {
const API_URL =`${BASE_URL}/api/v1/posts?term_type=pillar_of_islam`;

  const res = await fetch(API_URL, {
    next: { revalidate: 30 }, 
  });
  const json = await res.json();
  return json?.data || [];
}






// utils/postData.ts

export async function postData(
  url,
  payload
) {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Request failed.");
    }

    return {
      success: true,
      message: data.message || "Success",
    };
  } catch (error) {
    return {
      success: false,
      message: error.message || "Something went wrong",
    };
  }
}
