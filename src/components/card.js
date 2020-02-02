import React, { useEffect, useState } from 'react';

function Card(props) {
    const { title } = props;
    const { img } = props;
    const { text } = props;

    return <div>
                <div class="card">
                    <img class="card-image" src={img} alt={title}/>
                    <div class="card-texts">
                        <h4><b>{title}</b></h4>
                        <p>{text}</p>
                    </div>
                </div>
            </div>;
      }
      
      
export default Card;