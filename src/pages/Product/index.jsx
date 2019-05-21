import React, { Component, Fragment } from 'react';
import axios from 'axios'

import './style.css';

class Product extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.match.params.id,
            loading: true,
            data: {},
        };
    }

    componentDidMount(){
        axios.all([
            axios.get(`https://api.mercadolibre.com/items/${this.state.id}`),
            axios.get(`https://api.mercadolibre.com/items/${this.state.id}/description`)
        ])

        .then(([item, description]) => {
            console.log(item, description)

            this.setState({
                data: {
                    ...item.data,
                    description: description.data.plain_text,
                },
                loading: false,
            });

        })
        .catch((err) => {
            console.log(err)
        });
    }

    render () {
        const { id, data, loading } = this.state;
        if(loading){
            return (
                <Fragment>
                    <div className="loading">
                        <div className="mdl-spinner mdl-js-spinner is-active"></div>
                        <div >Carregando...</div>
                    </div>
                </Fragment>
            );
        } else {
            return (
                <Fragment>
                    <div className="demo-card-wide mdl-card mdl-shadow--2dp">
                        <div className="mdl-grid">
                                <div className="mdl-cell mdl-cell--8-col">
                                    <img 
                                        src={data.thumbnail}
                                        />
                                </div>
                                <div className="mdl-cell mdl-cell--4-col">
                                    <div className="mdl-cell mdl-cell--12-col">
                                        {data.title}
                                    </div>
                                    <div className="mdl-cell mdl-cell--12-col">
                                        ID: {data.id}
                                    </div>
                                    <div className="mdl-cell mdl-cell--12-col">
                                        Preço: {data.price}
                                    </div>
                                    <div className="mdl-cell mdl-cell--12-col">
                                        Estoque: {data.initial_quantity}
                                    </div>
                                    <div className="mdl-cell mdl-cell--12-col">
                                        {data.warranty}
                                    </div>
                        
                            </div>

                        </div>
                    </div>
                </Fragment>
            );
        }
    }
}

export default Product;