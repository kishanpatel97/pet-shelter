import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const PetForm = () => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [skill1, setSkill1] = useState('');
    const [skill2, setSkill2] = useState('');
    const [skill3, setSkill3] = useState('');
    const [errors, setErrors] = useState({});

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:8000/api/pet', {
                name,
                type,
                description,
                skill1,
                skill2,
                skill3,
            })
            .then(() => {
                navigate('/');
            })
            .catch((err) => {
                setErrors(err.response.data.errors);
            });
    };

    return (
        <div className='container'>
            <h1>Pet Shelter</h1>
            <h3>Know of a pet needing a home?</h3>
            <form onSubmit={onSubmitHandler}>
                <div className='form-group'>
                    <label>Pet Name</label>
                    <input
                        type='text'
                        onChange={(e) => setName(e.target.value)}
                        className='form-control'
                    />
                    <span className='text-danger'>{errors.name ? errors.name.message : ''}</span>
                </div>

                <div className='form-group'>
                    <label>Pet Type</label>
                    <input
                        type='text'
                        onChange={(e) => setType(e.target.value)}
                        className='form-control'
                    />
                    <span className='text-danger'>{errors.type ? errors.type.message : ''}</span>
                </div>

                <div className='form-group'>
                    <label>Description</label>
                    <input
                        type='text'
                        onChange={(e) => setDescription(e.target.value)}
                        className='form-control'
                    />
                    <span className='text-danger'>
                        {errors.description ? errors.description.message : ''}
                    </span>
                </div>

                <div className='form-group'>
                    <label>Skill 1</label>
                    <input
                        type='text'
                        onChange={(e) => setSkill1(e.target.value)}
                        className='form-control'
                    />
                </div>

                <div className='form-group'>
                    <label>Skill 2</label>
                    <input
                        type='text'
                        onChange={(e) => setSkill2(e.target.value)}
                        className='form-control'
                    />
                </div>

                <div className='form-group'>
                    <label>Skill 3</label>
                    <input
                        type='text'
                        onChange={(e) => setSkill3(e.target.value)}
                        className='form-control'
                    />
                </div>

                <input
                    type='submit'
                    value='Add Pet'
                    className='btn btn-primary'
                />
                <button
                    onClick={(e) => {
                        navigate('/');
                    }}
                    className='btn btn-danger'
                >
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default PetForm;