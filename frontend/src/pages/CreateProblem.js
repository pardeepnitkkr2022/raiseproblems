import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createProblem } from '../api';
import './CreateProblem.css';

const CreateProblem = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createProblem({ title, description, tags: tags.split(',') });
            navigate('/problems');
        } catch (error) {
            console.error('Error creating problem:', error.response?.data?.message || error.message);
        }
    };

    return (
        <div className="problem-container">
            <h2>Create Problem</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Title" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    required 
                />
                <textarea 
                    placeholder="Description" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                    required
                ></textarea>
                <input 
                    type="text" 
                    placeholder="Tags (comma separated)" 
                    value={tags} 
                    onChange={(e) => setTags(e.target.value)} 
                />
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default CreateProblem;
