import axios from "axios";

// Устанавливаем базовый URL для API
axios.defaults.baseURL = "https://api.unsplash.com";

// Ваш API-ключ
const API_KEY = "Z8s8vEfdxMVK0k9e-_bjP5b1T9gKLsMv3OwvOuqBZc4";

// Заголовки для авторизации
const headers = {
  Authorization: `Client-ID ${API_KEY}`,
};

// Функция для получения изображений по запросу (первоначальный запрос)
export const getImages = async () => {
  const { data } = await axios("/search/photos", {
    headers,
    params: {
      query: "react",
      page: 1,
      per_page: 12,
    },
  });
  return data;
};

// Функция для поиска изображений по запросу с поддержкой пагинации
export const searchImages = async (query, page) => {
  const { data } = await axios("/search/photos", {
    headers,
    params: {
      query, // Передаем запрос от пользователя
      page, // Страница для пагинации
      per_page: 12, // Количество изображений на странице
    },
  });
  return data;
};
