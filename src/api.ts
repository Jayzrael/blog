import axios from 'axios';

const API_URL = 'https://blogtest.courierplus-ng.site/api';

const api = axios.create({
  baseURL: API_URL,
});

export const login = async (email: string, password: string) => {
  const response = await api.post('/login', { email, password });
  return response.data;
};

export const createPost = async (post: { title: string; content: string }, token: string) => {
  const response = await api.post('/posts', post, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const updatePost = async (post: { id: number; title: string; content: string }, token: string) => {
  const response = await api.put(`/posts/${post.id}`, post, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const deletePost = async (id: number, token: string) => {
  const response = await api.delete(`/posts/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getPosts = async () => {
  const response = await api.get('/posts');
  return response.data;
};
