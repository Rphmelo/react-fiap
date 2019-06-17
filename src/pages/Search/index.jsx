    
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './style.css';
class Search extends Component {
    constructor(){
        super();

        this.onSearch = this.onSearch.bind(this);
        this.state = {
            results: [],
        };
    }

    onSearch(event) {
        console.log(event.currentTarget.value);
        const value = event.currentTarget.value;

        axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${value}`)
        .then((data) => {
            console.log(data);
            this.setState({
                results: data.data.results,
            })
        })
    }

    renderItem(item){
        return (
            <div className="demo-card-square mdl-card mdl-shadow--2dp" key={item.id}>
                <div className="mdl-card__supporting-text">
                    { item.title }
                </div>
                <div className="mdl-card__actions mdl-card--border">
                    <Link to={`/product/${item.id}`}>
                        <button className="mdl-button mdl-js-button mdl-button--raised">
                            Ver Produto
                        </button>
                    </Link>
                </div>
            </div>
        )
    }

    render() {
        return (
            <Fragment>
                <div className="mdl-grid container__search">
                    <div className="mdl-cell mdl-cell--12-col">
                        <div className="mdl-textfield mdl-js-textfield">
                            <input 
                                className="mdl-textfield__input textfield__input__size" 
                                type="text" 
                                id="search" 
                                onChange={ this.onSearch }
                                />
                            <label className="mdl-textfield__label" htmlFor="search">O que você procura?</label>
                        </div>
                
                        { this.state.results.map(this.renderItem) }
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Search;