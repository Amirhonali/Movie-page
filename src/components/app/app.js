import './app.css'
import AppInfo from "../app-info/app-info"
import SearchPanel from "../search-panel/search-panel"
import AppFilter from "../app-filter/app-filter"
import MovieList from "../movie-list/movie-list"
import MoviesAddForm from '../movie-add-form/movie-add-form'

const App = () =>{
    const data = [
        {name: 'F1 2025', viewers: 911, favourite: true, id: 1},
        {name: 'Gran Turismo', viewers: 1000, favourite: false, id: 2},
        {name: 'Ferrarr vs McLaren', viewers: 322, favourite: false, id: 3},
        {name: 'Fast and Furious', viewers: 123, favourite: false, id: 4}
    ]
    return (
        <div className="app font-monospace">
            <div className="content">
                <AppInfo/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <MovieList data={data}/>
                <MoviesAddForm/>
            </div>
        </div>
    )
}

export default App;