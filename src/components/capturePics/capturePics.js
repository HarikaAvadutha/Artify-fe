import React, { useState } from 'react';
import { post } from 'axios';
import WebcamCapture from '../camera/camera';
import { Button } from '../buttons/buttons';
import { BASE_API_URL } from '../../settings';
import FontAwesome from 'react-fontawesome';

const artworkId = Math.floor(Math.random() * 1000000000);

const SERVER_ENDPOINT = `${BASE_API_URL}/api/artimage/`;
// eslint-disable-next-line no-unused-vars
let currentScreenCnt = 1;

const CapturePics = ({ loadNextSection, formData }) => {
  const [currentStage, setCurrentStage] = useState('info');
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [helpEnabled, toggleHelp] = useState(false);
  const imageInputRef = React.useRef();

  let mainImage;

  const stages = {
    info: {
      title: 'Take a Series of pictures',
      caption: '',
    },
    mainImage1: {
      title: 'Main Image',
      caption: 'Capture the entire work including the frame from directly in front',
    },
    mainImage2: {
      title: 'Main Image (2)',
      caption: 'Take 2 steps to the right. This may reduce glare. Capture the entire work including the frame.',
      helpEnable: true,
      hasLabel: true,
      label: 'Not Signed',
    },
    // mainImage3: {
    //   title: 'Main Image (3)',
    //   caption: 'Take 4 steps to the left. This may reduce glare. Capture the entire work including the frame.',
    // },
    // upperLeftQuadrant: {
    //   title: 'Upper Left Quadrant',
    //   caption: 'Align area in green rectangle.',
    // },
    // upperRightQuadrant: {
    //   title: 'Upper Right Quadrant',
    //   caption: 'Align area in green rectangle.',
    // },
    // lowerLeftQuadrant: {
    //   title: 'Lower Left Quadrant',
    //   caption: 'Align area in green rectangle.',
    // },
    // lowerRightQuadrant: {
    //   title: 'Lower Right Quadrant',
    //   caption: 'Align area in green rectangle.',
    // },
    // signatureCloseUp: {
    //   title: 'Close-up of the signature',
    //   caption: 'If the work is NOT signed press Not signed.',
    //   helpEnable: true,
    //   hasLabel: true,
    //   label: 'Not Signed'
    // },
    // darkestArea: {
    //   title: 'Darkest Area',
    //   caption: 'Stay in focus.',
    // },
    // lightestArea: {
    //   title: 'Lightest Area',
    //   caption: 'Stay in focus.',
    // },
    // media: {
    //   title: 'Media',
    //   caption:
    //     'The way paint is applied to the surface tells us a lot about the artist and materials. Please take a close-up of the objects surface',
    // },
    // surface: {
    //   title: 'Surface',
    //   caption: 'Take a close-up of the surface where the texture is coming through.',
    // },
    // condition: {
    //   title: 'Condition',
    //   caption:
    //     'Condition usually helps us get a sense of the objects age. Please capture any potential abrasions cracking, etc.',
    // },
    // additionalImages: {
    //   title: 'Additional Images',
    //   caption: 'Please take any additional photographs of the objects surface.',
    //   hasLabel: true,
    //   label: 'Skip'
    // },
    // backFullPicture: {
    //   title: 'Full picture of paintings back',
    //   caption: 'Capture the entire work including the frame.',
    //   hasLabel: true,
    //   label: 'Skip'
    // },
    // galleryStickers: {
    //   title: 'Gallery Stickers',
    //   caption: 'Press No Stickers if there arent any.',
    //   isLast: true,
    //   hasLabel: true,
    //   label: 'No Stickers'
    // },
  };

  const navObj = (obj, currentKey, direction) => {
    return {
      key: Object.keys(obj)[Object.keys(obj).indexOf(currentKey) + direction],
      value: Object.values(obj)[Object.keys(obj).indexOf(currentKey) + direction],
    };
  };

  const converBase64toFileObj = base64String => {
    const arr = base64String.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], `upload-${+new Date()}`, { type: mime });
  };

  const fileUpload = (imgSrc, type = 'live') => {
    const finalFile = type === 'upload' ? selectedFile : converBase64toFileObj(imgSrc);

    if (!mainImage) {
      mainImage = type === 'upload' ? selectedFile : imgSrc;
    }
    console.log('finalfile', finalFile.type)
    const payload = new FormData();
    payload.append('userId', JSON.parse(localStorage.getItem('user')).id);
    payload.append('artworkId', artworkId);
    payload.append('image_title', stages[currentStage].title);
    payload.append('image_type', finalFile.type.split('/')[1] === 'jpeg' ? 'jpg' : finalFile.type.split('/')[1]);
    payload.append('raw_image', finalFile);
    payload.append('filelen', finalFile.size);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        Authorization: `Token ${localStorage.getItem('token')}`,
      },
    };
    return post(SERVER_ENDPOINT, payload, config);
  };

  const handleFileInput = file => {
    setSelectedFile(file);
  };

  const handleNext = ({ imgSrc, type }) => {
    let nextObj;
    console.log('currentStage', currentStage);
    console.log('stages', stages);
    if (currentStage !== 'info' && (imgSrc || selectedFile)) {
      console.log('formData', formData);
      fileUpload(imgSrc, type)
        .then(res => {
          console.log('res', res);
          setSelectedFile(null);
          setSelectedType(null);
          if (imageInputRef.current) imageInputRef.current.value = '';
          nextObj = navObj(stages, currentStage, 1);
          currentScreenCnt += 1;
          if (!Object.values(nextObj).filter(Boolean).length) {
            loadNextSection({
              name: 'takePictures',
              data: { artworkId },
            });
          } else {
            setCurrentStage(nextObj.key);
          }
        })
        .catch(error => console.log('file upload error', error));
    }
    else {
      nextObj = navObj(stages, currentStage, 1);
      currentScreenCnt += 1;
      setCurrentStage(nextObj.key);
    }
  };

  const skipImage = () => {
    setSelectedFile(null);
    setSelectedType(null);
    let nextObj = navObj(stages, currentStage, 1);
    currentScreenCnt += 1;
    if (!Object.values(nextObj).filter(Boolean).length) {
      loadNextSection({
        name: 'takePictures',
        data: { artworkId },
      });
    } else {
      setCurrentStage(nextObj.key);
    }
  };

  const handleBack = () => {
    const backObj = navObj(stages, currentStage, -1);
    setCurrentStage(backObj.key);
  };

  const handleSelectedType = selctedType => {
    setSelectedType(selctedType);
    setSelectedFile(null);
    if (imageInputRef.current) imageInputRef.current.value = '';
  };

  const onHelpClicked = (type, enabled = false) => {
    if (enabled)
      toggleHelp(type);
  }

  const captureContainer = {
    maxWidth: '300px',
    margin: 'auto',
    fontSize: '15px',
    backgroundColor: '#0B1A23',
    color: '#FFFFFF'
  }

  const title = {
    padding: '10px',
    fontWeight: 900,
    fontSize: '20px',
    color: 'white',
  }

  const gold = {
    color: '#BAA06A',
  }

  const groupList = {
    listStyleType: 'disc',
    margin: '15px',
    color: '#FFFFFF'
  }

  const ptTen = {
    paddingTop: '10px',
  }

  const autoNextButton = {
    backgroundColor: '#BAA06A',
    borderRadius: 24.5,
    color: '#0B1A23',
    margin: '5px'
  }

  const manualBackButton = {
    backgroundColor: '#555862',
    borderRadius: 24.5,
    color: '#FFFFFF',
    margin: '5px'
  }

  const nextButton = {
    backgroundColor: '#BAA06A',
    borderRadius: 24.5,
    color: '#0B1A23',
    float: 'right',
    padding: '5px',
    width: '75px'
  }


  const captureHtml = <div style={captureContainer}>
    {currentStage === 'info' && Object.keys(stages[currentStage]).length && (
      <div>
        <div style={title}>{stages[currentStage].title}</div>
        <div>
          <p style={gold}> Our advanced computer vision:</p>
          <ul style={groupList}>
            <li>Stabilizes the camera</li>
            <li>Corrects for camera positioning errors</li>
            <li>Prevents out of focus images</li>
            <li>Adapts to your room lighting</li>
            <li>Creates full-frame image</li>
            <li>Enhances resolution of fine detail and color.</li>
          </ul>
          <span className={ptTen}>Please be sure to avoid glare and harsh shadows.</span>
        </div>
        <button style={nextButton} onClick={handleNext}>
          Next
        </button>
      </div>
    )}
    {currentStage !== 'info' && Object.keys(stages[currentStage]).length && (
      <div>
        <div>
          <div style={{ fontSize: '15px' }}>{stages[currentStage].title}</div>
          <div>{stages[currentStage].caption}
            <FontAwesome
              name="question-circle"
              size="2x"
              onClick={() => onHelpClicked(true, stages[currentStage]?.helpEnable)}
              style={{ padding: '5px', color: 'white', float: 'right' }} />
          </div>
          <Button style={manualBackButton} onClick={() => handleSelectedType('upload')}>Manual</Button>
          <Button style={autoNextButton} onClick={() => handleSelectedType('live')}>Auto</Button>
        </div>
        {selectedType === 'live' && (
          <div>
            <WebcamCapture artworkId={artworkId} handleBack={handleBack} handleNext={handleNext} data={stages[currentStage]} skipClick={skipImage} />
          </div>
        )}
        {selectedType === 'upload' && (
          <div style={{ margin: '25px 0' }}>
            <input type="file" ref={imageInputRef} onChange={($event) => handleFileInput($event.target.files[0])} />
            <Button style={manualBackButton} className="next-button" onClick={handleBack}>
              Back
            </Button>
            <Button style={autoNextButton} className="next-button" onClick={() => handleNext({ imgSrc: '', type: 'upload' })}>
              Next
            </Button>
          </div>
        )}
      </div>
    )}
  </div>;

  const helpTemplate = <div style={captureContainer}>
    <div style={{ paddingTop: '10px' }}>
      <FontAwesome
        name="chevron-circle-left"
        size="2x"
        onClick={() => onHelpClicked(false, true)}
        style={{ padding: '5px', color: 'white' }} />
    </div>
    <div style={{ fontSize: '20px', fontWeight: '700', color: 'white', paddingTop: '15px' }}>
      SIGNATURE HELP
    </div>
    <p style={{ color: 'white' }}>If the artwork contains a signature, align the <span style={{ color: 'green' }}>GREEN RETANGLE</span> around the artist's signature</p>
    <p style={{ color: 'white', paddingTop: '15px' }}>If the work is NOT signed press Not Signed</p>
  </div>;

  const renderTemplate = () => {
    return helpEnabled ? helpTemplate : captureHtml;
  }

  return (
    renderTemplate()
  );
};

export default CapturePics;
