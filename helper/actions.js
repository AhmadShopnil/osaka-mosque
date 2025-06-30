import { BASE_URL } from "./baseUrl";



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