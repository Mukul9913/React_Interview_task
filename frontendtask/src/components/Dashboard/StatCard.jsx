import React from 'react'
import '../../style/StatCard.css';
const StatCard = ({icon, title, value, change ,changeIcon}) => {
  return<>
  <div className="stat-card">
      <div className="icon">{icon}</div>
      <div className="content">
        <div>
        <h4>{value}</h4>
        <span className='title'>{title}</span>
        </div>
        <span className= {`change ${change >= 0 ? 'positive' : 'negative'}`}>
          {Math.abs(change)}% {changeIcon}
        </span>
      </div>
    </div>
  
  </>
}

export default StatCard