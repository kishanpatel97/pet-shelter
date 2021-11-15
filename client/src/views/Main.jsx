import React from 'react';
import PetForm from '../components/PetForm';
import ShowPet from '../components/ShowPet';
import PetInfo from '../components/PetInfo';
import EditPet from '../components/EditPet';
import { Router, Link } from '@reach/router';

const Main = () => {
    return (
        <div>
            <div className='container'>
                <Link to='/'>Home</Link> | <Link to='/new'>Add a pet to the shelter</Link>
            </div>

            <Router>
                <ShowPet path='/' />
                <PetForm path='/new' />
                <PetInfo path='/pet/:_id' />
                <EditPet path='/edit/:_id' />
            </Router>
        </div>
    );
};

export default Main;
