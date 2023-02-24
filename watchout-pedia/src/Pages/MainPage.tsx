import React from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import LatestMovieSection from "../features/movie/latest";
import NowPlayingSection from "../features/movie/nowPlaying";
import PopularMovieSection from '../features/movie/popular';
import TopRateMovieSection from '../features/movie/topRate';
import UpComingMovieSection from '../features/movie/upcoming';

const MainPage: React.FC = () => {
    return (
        <div>
            <Header/>
            <LatestMovieSection/>
            <NowPlayingSection />
            <PopularMovieSection />
            <TopRateMovieSection />
            <UpComingMovieSection />
            <Footer/>
        </div>
    );
}

export default MainPage;