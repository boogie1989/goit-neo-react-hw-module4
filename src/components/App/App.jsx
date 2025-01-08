import css from "./App.module.css";
import { useState, useEffect } from "react";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";
import { fetchImages } from "../../api/api";

const App = () => {
	const [images, setImages] = useState([]);
	const [query, setQuery] = useState("");
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [modalImage, setModalImage] = useState(null);
	const [totalImages, setTotalImages] = useState(0);

	useEffect(() => {
		if (!query) return;

		const fetchAndSetImages = async () => {
			setError(null);
			setLoading(true);

			try {
				const data = await fetchImages(query, page);
				setImages((prev) => [...prev, ...data.results]);
				setTotalImages(data.total);
			} catch {
				setError("Error fetching images!");
				setImages([]);
			} finally {
				setLoading(false);
			}
		};

		fetchAndSetImages();
	}, [query, page]);

	const handleSearch = (newQuery) => {
		if (newQuery === query) return;
		setQuery(newQuery);
		setPage(1);
		setImages([]);
	};

	const handleImageClick = (image) => {
		if (!modalImage) {
			setModalImage(image);
		}
	};

	const closeModal = () => {
		setModalImage(null);
	};

	const loadMore = () => {
		setPage((prevPage) => prevPage + 1);
	};

	return (
		<div className={css.container}>
			<SearchBar onSubmit={handleSearch} />

			{error && <ErrorMessage message={error} />}

			<ImageGallery images={images} onImageClick={handleImageClick} />

			{loading && <Loader />}

			{images.length > 0 && images.length < totalImages && !loading && <LoadMoreBtn onClick={loadMore} />}

			{modalImage && <ImageModal image={modalImage} onClose={closeModal} />}
		</div>
	);
};

export default App;
