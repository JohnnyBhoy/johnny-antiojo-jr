import React, { useEffect, useState } from "react";
import { getMovies } from "../../api/movie";
import { useNotification } from "../../hooks";
import MovieListItem from "../MovieListItem";
import NextAndPrevButton from "../NextAndPrevButton";

let currentPage = 0;
let limit = 7;

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [reachToEnd, setReachToEnd] = useState(false);

  const { updateNotification } = useNotification();

  const fetchMovies = async (pageNo) => {
    const { error, movies } = await getMovies(pageNo, limit)

    if (!movies.length) {
      currentPage = pageNo - 1;
      return setReachToEnd(true);
    }

    if (error) updateNotification('error', 'Movise not found');
    setMovies([...movies])
  }

  const handleNextClick = () => {
    if (reachToEnd) return;
    currentPage += 1;
    fetchMovies(currentPage);
  }

  const handlePrevClick = () => {
    if (currentPage === 0) return;
    currentPage -= 1;
    fetchMovies(currentPage);
  }

  useEffect(() => {
    fetchMovies(currentPage);
  }, []);

  return <>
    <div className="space-y-3 p-5">
      {movies.map((movie) => {
        return <MovieListItem key={movie.id} movie={movie} />
      }
      )}
    </div>
    <div className="flex justify-end items-end">
      <NextAndPrevButton onPrevClick={handlePrevClick} onNextClick={handleNextClick} />
    </div>
  </>
}
