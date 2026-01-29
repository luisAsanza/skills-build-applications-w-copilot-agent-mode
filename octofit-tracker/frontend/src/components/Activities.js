import React, { useEffect, useState } from 'react';
import { getApiBaseUrl } from '../utils/api';

const Activities = () => {
  const [data, setData] = useState([]);
  const endpoint = `${getApiBaseUrl()}/api/activities/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(json => {
        const results = json.results || json;
        setData(results);
        console.log('Activities API endpoint:', endpoint);
        console.log('Fetched activities data:', results);
      })
      .catch(err => console.error('Error fetching activities:', err));
  }, [endpoint]);

  return (
    <div className="container mt-4">
      <h2>Activities</h2>
      <ul className="list-group">
        {data.map((item, idx) => (
          <li key={item.id || idx} className="list-group-item">
            {JSON.stringify(item)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Activities;
