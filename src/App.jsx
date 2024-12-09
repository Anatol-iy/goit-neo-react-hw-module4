import  { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { searchImages } from "./api/images"; 

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [modalImage, setModalImage] = useState(null);
  const [hasMoreImages, setHasMoreImages] = useState(true);

  // Запрос на получение изображений при изменении query или page
  useEffect(() => {
    if (query) {
      setLoading(true);
      fetchImages(query, page);
    }
  }, [query, page]);

  // Функция для получения изображений по запросу и пагинации
  const fetchImages = async (query, page) => {
    try {
      const response = await searchImages(query, page);
      if (response.results.length === 0) {
        throw new Error("No images found for your query.");
      }
      setError(null);
      if (response.results.length < 12) {
        setHasMoreImages(false); // Если на странице меньше 12 изображений, больше не запрашиваем
      }
      setImages((prevImages) => [...prevImages, ...response.results]);
      setLoading(false);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  // Обработчик отправки формы
  const handleSubmit = (searchQuery) => {
    setQuery(searchQuery);
    setImages([]); // Очищаем текущие изображения перед новым запросом
    setPage(1); // Сбрасываем на первую страницу
  };

  // Открытие модального окна с изображением
  const openModal = (image) => setModalImage(image);
  const closeModal = () => setModalImage(null);

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={openModal} />
      {loading && <Loader />}
      {images.length > 0 && !loading && hasMoreImages && (
        <LoadMoreBtn onClick={() => setPage(page + 1)} />
      )}
      {modalImage && <ImageModal image={modalImage} onClose={closeModal} />}
      <Toaster />
    </div>
  );
};

export default App;
