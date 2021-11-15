import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const PetInfo = (props) => {
    const [pet, setPet] = useState({});
    const [likes, setLikes] = useState(0);

    const getPet = () => {
        axios
            .get('http://localhost:8000/api/pet/' + props._id)
            .then((res) => {
                console.log(res.data);
                setPet(res.data);
                console.log(res);
            })
            .catch((err) => console.log('Error:', err));
    };

    useEffect(() => {
        getPet();
    }, [props._id]);

    const deletePet = (_id) => {
        axios
            .delete(`http://localhost:8000/api/pet/${_id}`)
            .then((res) => {
                console.log(res);
                navigate('/');
            })
            .catch((err) => console.log(err));
    };

    const likePet = (_id) => {
        axios
            .put('http://localhost:8000/api/like/' + _id, {
                likes,
            })
            .then((res) => {
                console.log(res);
                getPet();
            })
            .catch((err) => console.log(err));
        document.getElementById('button').setAttribute('disabled', 'disabled');
    };

    return (
        <div className='container'>
            <h3>Details about: {pet.name}</h3>
            <p>Pet type: {pet.type}</p>
            <p>Description: {pet.description}</p>
            <p>
                Skills:
                <ul>
                    {console.log(pet)}
                    {pet.skill1 ? <li>{pet.skill1}</li> : ''}
                    {pet.skill2 ? <li>{pet.skill2}</li> : ''}
                    {pet.skill3 ? <li>{pet.skill3}</li> : ''}
                </ul>
            </p>
            <p>Likes: {pet.likes}</p>

            <button
                onClick={(e) => {
                    likePet(pet._id);
                }}
                id='button'
            >
                Like this pet
            </button>
            <button
                onClick={(e) => {
                    deletePet(pet._id);
                }}
                className='btn btn-link align-baseline'
            >
                Adopt this pet!
            </button>
        </div>
    );
};

export default PetInfo;
