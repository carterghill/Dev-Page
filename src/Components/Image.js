import React from 'react';

function importAll(r) {

    var table = {};
    var item;
    var values = console.log(r.keys().map(r));
    var keys = [];

    r.keys().map(item => {
        console.log(item);
        keys.push(item)
    });

    for (let i = 0; i < keys.length; i++) {
        table[keys[i]] = r.keys().map(r)[i];
    }

    return table;
}

const images = importAll(require.context('../Images/', false, /\.(png|jpe?g|svg)$/));

export const Image = ({
    className = '',
    img = ''
}) => {

    return (
        <img className={className} src={images['./'+img]}/>
    )

}

export default Image;
