import axios from 'axios';

axios.defaults.baseURL = 'https://64429ddd33997d3ef91539c5.mockapi.io/';

export const getUsers = async (isFollowed, page = 1) => {
  const res = await axios.get(`twits`, {
    params: {
      isFollowed,
      page,
      limit: 3,
    },
  });
  return res.data;
};

export const updateUser = async (id, followers, isFollowed) => {
  await axios.put(`twits/${id}`, { followers, isFollowed });
};
