import React from 'react';
import style from './receipies.module.css';

const Food = ({title, calories, image, ingredients}) => {
    return (
        <div className={style.receipies}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img className={style.image} src={image} alt=""></img>
        </div>
    );
}

export default Food;