import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from '../../common/header/Header';
import moviesData from '../../assets/movieData';
import './Details.css';
import Typography from '@material-ui/core/Typography';
import Home from '../../screens/home/Home';
import YouTube from 'react-youtube';

class Details extends Component {
    constructor() {
        super ();
        this.state = {
            movie: {}
        }
    }

    componentWillMount(){
        let currentState = this.state;
        currentState.movie  = moviesData.filter((mov) => {
            return mov.id === this.props.movieId
        })[0];
        this.setState({currentState});
        console.log(this.state);
    }

    backtohomeHandler = () => {
        ReactDOM.render(<Home />, document.getElementById('root'));
    }
    
    render() {
        let movie = this.state.movie;
        const opts = {
            height: '300',
            width: '700',
            playerVars: {
                autoplay: 1
            }
        }
        return(
            <div className="details">
                <Header />
                <div className="back">
                    <Typography onClick={this.backtohomeHandler}>
                    &#60; Back to Home
                    </Typography>
                </div>
                <div className="flex-containerDetails">
                    <div className="leftDetails">
                        <img src={movie.poster_url} alt={movie.title}/>
                    </div>
                    <div className="middleDetails">
                        <div>
                            <Typography variant='headline'>
                                {movie.title}
                            </Typography>
                        </div>
                        <div>
                            <Typography>
                                <span className="bold">Genre: </span>
                                {movie.genres.join(', ')}
                            </Typography>
                        </div>
                        <div>
                            <Typography>
                                <span className="bold">Duration: </span>
                                {movie.duration}
                            </Typography>
                        </div>
                        <div>
                            <Typography>
                                <span className="bold">Release Date: </span>
                                {new Date (movie.release_date).toDateString()}
                            </Typography>
                        </div>
                        <div>
                            <Typography>
                                <span className="bold">Rating: </span>
                                {movie.critics_rating}
                            </Typography>
                        </div>
                        <br />
                        <div>
                            <Typography>
                                <span className="bold">Plot: </span>
                                <span><a href={movie.wiki_url}>(Wiki Link)</a> {movie.storyline}</span>
                            </Typography>
                        </div>
                        <div className="trailerContainer">
                            <Typography><span className="bold">Trailer: </span></Typography>
                            <YouTube 
                                videoId={movie.trailer_url.split("?v=")[1]}
                                opts={opts}
                                onReady={this._onReady}
                            />
                        </div>
                    </div>
                    <div className="rightDetails">
                    </div>

                </div>
            </div>
        );
    }
}

export default Details;