import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const EditPet = (props) => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [skill1, setSkill1] = useState('');
    const [skill2, setSkill2] = useState('');
    const [skill3, setSkill3] = useState('');
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/pet/${props._id}`)
            .then((res) => {
                setName(res.data.name);
                setType(res.data.type);
                setDescription(res.data.description);
                setSkill1(res.data.skill1);
                setSkill2(res.data.skill2);
                setSkill3(res.data.skill3);
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    }, [props._id]);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:8000/api/pet/${props._id}`, {
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
            <h3>Know a pet needing a home?</h3>
            <form onSubmit={onSubmitHandler}>
                <div className='form-group'>
                    <label>Pet Name</label>
                    <input
                        type='text'
                        onChange={(e) => setName(e.target.value)}
                        className='form-control'
                        value={name}
                    />
                    <span className='text-danger'>{errors.name ? errors.name.message : ''}</span>
                </div>

                <div className='form-group'>
                    <label>Pet Type</label>
                    <input
                        type='text'
                        onChange={(e) => setType(e.target.value)}
                        className='form-control'
                        value={type}
                    />
                    <span className='text-danger'>{errors.type ? errors.type.message : ''}</span>
                </div>

                <div className='form-group'>
                    <label>Description</label>
                    <input
                        type='text'
                        onChange={(e) => setDescription(e.target.value)}
                        className='form-control'
                        value={description}
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
                        value={skill1}
                    />
                </div>

                <div className='form-group'>
                    <label>Skill 2</label>
                    <input
                        type='text'
                        onChange={(e) => setSkill2(e.target.value)}
                        className='form-control'
                        value={skill2}
                    />
                </div>

                <div className='form-group'>
                    <label>Skill 3</label>
                    <input
                        type='text'
                        onChange={(e) => setSkill3(e.target.value)}
                        className='form-control'
                        value={skill3}
                    />
                </div>

                <input type='submit' value='Edit Pet' className='btn btn-success' />
            </form>
        </div>
    );
};

export default EditPet;
