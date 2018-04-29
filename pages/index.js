import React, { Component } from 'react';
import Link from 'next/link';

// import Route onClick events
import Router from 'next/router';


class IndexPage extends Component {

    // load props from promise before rendering
    static getInitialProps(c){
        console.log(c);

        const promice = new Promise((res, rej) => {
            setTimeout(() => {
                res({name: 'SUper App'})
            },0);
        });
        return promice;
    }


    render(){
        return(
            <div>
                <h1>The Index IndexPage {this.props.name}</h1>
                <p>Go to <Link href="./sadfas"><a>Aasfsuth Page</a></Link></p>
                <button onClick={() => Router.push('/auth')}>BUtton </button>
            </div>
        )
    }
} 


export default IndexPage;