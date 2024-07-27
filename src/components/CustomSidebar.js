import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFileAlt, faChartLine } from '@fortawesome/free-solid-svg-icons';

const CustomSidebar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="custom-sidebar">
      <ul>
        <li onClick={() => handleNavigation('/home')}>
          <FontAwesomeIcon icon={faHome} /> Home
        </li>
        <li onClick={() => handleNavigation('/dashboard')}>
          <FontAwesomeIcon icon={faFileAlt} /> Monthly Statements
        </li>
        <li onClick={() => handleNavigation('/settings')}>
          <FontAwesomeIcon icon={faChartLine} /> Analytics
        </li>
      </ul>
    </div>
  );
};

export default CustomSidebar;
