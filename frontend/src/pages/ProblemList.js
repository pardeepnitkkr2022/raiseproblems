import React, { useEffect, useState } from 'react';
import { getProblems } from '../api'; // Update with your API call file
import { Link } from 'react-router-dom';
import './ProblemList.css'; // Ensure you have this CSS file for styling

const ProblemList = () => {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const { data } = await getProblems();
        setProblems(data);
      } catch (error) {
        console.error('Error fetching problems:', error);
      }
    };
    fetchProblems();
  }, []);

  return (
    <div className="problem-list">
      <h1 className="problem-list__title">Problem List</h1>
      <ul className="problem-list__items">
        {problems.length > 0 ? (
          problems.map((problem) => (
            <li key={problem._id} className="problem-list__item">
              <Link to={`/problems/${problem._id}`} className="problem-list__link">
                <div className="problem-list__header">
                  <h2 className="problem-list__title">{problem.title}</h2>
                  <p className="problem-list__description">{problem.description}</p>
                </div>
              </Link>
            </li>
          ))
        ) : (
          <p className="problem-list__empty">No problems available</p>
        )}
      </ul>
    </div>
  );
};

export default ProblemList;

