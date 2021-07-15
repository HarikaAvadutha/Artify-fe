import React from 'react';
import FontAwesome from 'react-fontawesome';
import { UserTableStyleWrapper } from './style';
import { Main } from '../styled';
import { Button } from '../../components/buttons/buttons';
import { ReviewStyle } from '../../components/reviewForm/style';
import { get } from 'axios';
import { BASE_API_URL } from '../../settings';
import { useLocation} from 'react-router-dom';

const ArtWorkInfo = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [images, setImages] = React.useState([]);
  const location = useLocation();
  const artformData = location.state;
  console.log('artFormData', artformData)
  // const SERVER_ENDPOINT = `${BASE_API_URL}/api/artimage?artworkId=${formData.takePictures.artworkId}`;
  const SERVER_ENDPOINT = `${BASE_API_URL}/api/artimage?artworkId=`;

  const fetchImages = () => {
    get(SERVER_ENDPOINT).then(res => {
      if (res && res.hasOwnProperty('data')) {
        setImages(res.data);
      }
    });
  };

  const updateActiveIndex = index => {
    setActiveIndex(index);
    if (index === 1) {
      fetchImages();
    }
  };

  const getDimensionData = () => {
    let str = '';
    // eslint-disable-next-line no-unused-expressions
    formData.artWorkInfo?.values.Dimensions.forEach((element, index) => {
      str += `${element.value} ${element.type}`;
      if (index === 0) str += ` x `;
    });
    return str;
  };

  return (
    <div style={{ backgroundColor: '#0B1A23' }}>
      <ReviewStyle>
        <div className="onstart-container on-start">
          <div className="tab">
            <button
              style={{ backgroundColor: activeIndex === 0 ? '#BAA06A' : '#555862', borderRadius: '5px 0 0 5px' }}
              onClick={() => updateActiveIndex(0)}
            >
              Information
            </button>
            <button
              style={{ backgroundColor: activeIndex === 1 ? '#BAA06A' : '#555862' }}
              onClick={() => updateActiveIndex(1)}
            >
              Images
            </button>
            <button
              style={{ backgroundColor: activeIndex === 2 ? '#BAA06A' : '#555862', borderRadius: '0 5px 5px 0' }}
              onClick={() => updateActiveIndex(2)}
            >
              History
            </button>
          </div>

          {activeIndex === 0 && (
            <div id="Information" className="tabcontent">
              <h1>Information Overview:</h1>
              <div className="field">
                <div style={{ width: '200px' }}>
                  <span className="field-label">Artist Name</span>
                  <span className="field-value">{artformData['artist_name']}</span>
                </div>
              </div>
              <div className="field">
                <div style={{ width: '200px' }}>
                  <span className="field-label">Title</span>
                  <span className="field-value">{artformData['art_title']}</span>
                </div>
              </div>
              <div className="field">
                <div style={{ width: '200px' }}>
                  <span className="field-label">Work Type</span>
                  <span className="field-value">{artformData['work_type']}</span>
                </div>
              </div>
              <div className="field">
                <div style={{ width: '200px' }}>
                  <span className="field-label">Media</span>
                    <span className="field-value">{artformData['media_type']}</span>
                </div>
              </div>
              <div className="field">
                <div style={{ width: '200px' }}>
                  <span className="field-label">Support</span>
                    <span className="field-value">{artformData['support_type']}</span>
                </div>
              </div>
              <div className="field">
                <div style={{ width: '200px' }}>
                  <span className="field-label">Dimensions</span>
                    <span className="field-value">{`${artformData['art_width']} x ${artformData['art_height']} ${artformData['measure_units']}`}</span>
                </div>
              </div>
            </div>
          )}

          {activeIndex === 1 && (
            <div id="Images" className="tabcontent">
              <h1>Images</h1>
              {images.map((image, idx) => (
                <div style={{ marginBottom: '10px' }} key={idx}>
                  <img style={{ width: '200px', height: '200px' }} src={image.raw_image} />
                </div>
              ))}
            </div>
          )}

          {activeIndex === 2 && (
            <div id="History" className="tabcontent">
              <h1>History:</h1>
              <div className="field">
                <div style={{ width: '200px' }}>
                  <span className="field-label">Purchase Price</span>
                  <span className="field-value">{artformData['purchase_price']}</span>
                </div>
              </div>
              <div className="field">
                <div style={{ width: '200px' }}>
                  <span className="field-label">State</span>
                  <span className="field-value">{artformData['loc_state']}</span>
                </div>
              </div>
              <div className="field">
                <div style={{ width: '200px' }}>
                  <span className="field-label">City</span>
                  <span className="field-value">{artformData['loc_city']}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </ReviewStyle>
    </div>
  );
};

export default ArtWorkInfo;
