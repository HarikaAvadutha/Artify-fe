import React, { useEffect, useState } from 'react';
import { Row, Col, Table } from 'antd';
import { get } from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { ArtWorkStyleWrapper } from './style';
import { Main, TableWrapper } from '../styled';
import { BASE_API_URL } from '../../settings';

const SERVER_ENDPOINT = `${BASE_API_URL}/api/artwork/`;

const ArtWork = () => {
  const history = useHistory();
  const [data, SetData] = useState([]);
  const fetchData = () => {
    get(SERVER_ENDPOINT).then(res => {
      if (res && res.data) {
        SetData(res.data);
      }
    });
  };
  const onClick = idx => {
    history.push({
      pathname: `/admin/users/view/artwork/${data[idx].artwork_guid}`,
      state: data[idx],
    });
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <div style={{ backgroundColor: '#0B1A23' }}>
      <Main>
          <ArtWorkStyleWrapper>
        <div>
          <table style={{ border: '2px solid white' }}>
            <thead>
              <th>Art Title</th>
              <th>Artist Name</th>
            </thead>
            <tbody>
              {data &&
                data.map((row, idx) => (
                  <tr style={{ color: 'white', border: '3px Soild white' }}>
                    <td>
                      {/* <Link onClick={() => onClick(idx)}>{row.art_title}</Link> */}
                      <Link
                        to={{
                          pathname: `/admin/users/view/artwork/${data[idx].artwork_guid}`,
                          state: data[idx],
                        }}
                      >
                        {row.art_title}
                      </Link>
                    </td>
                    <td>{row.artist_name}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
         </ArtWorkStyleWrapper>
      </Main>
    </div>
  );
};

export default ArtWork;
