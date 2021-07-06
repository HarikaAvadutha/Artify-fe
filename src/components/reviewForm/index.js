import React, { useEffect } from "react";
import { ReviewStyle } from './style';
import { Button } from '../buttons/buttons';
import FontAwesome from 'react-fontawesome';


export default function Review({ reviewActionTriggers, formData }) {
    let [activeIndex, setActiveIndex] = React.useState(0);
    let [enableEditField, setEnableEditField] = React.useState({
        artistName: false,
        title: false,
        workType: false,
        media: false,
        support: false,
        dimensions: false
    });
    let [artformData, setArtformData] = React.useState(formData.artWorkInfo.values)

    useEffect(() => {
        // console.log(enableEditField);
    });

    const updateActiveIndex = (index) => {
        setActiveIndex(index);
    }

    const getDimensionData = () => {
        let str = '';
        formData.artWorkInfo?.values['Dimensions'].forEach((element, index) => {
            str += `${element.value} ${element.type}`;
            if (index === 0)
                str += ` x `;
        });
        return str;
    }

    const showEditField = (type) => {
        const data = !enableEditField[type];
        setEnableEditField({
            ...enableEditField,
            [type]: data
        });
    }

    const onChangeInput = (e, type) => {
        let data;
        switch (type) {
            case 'Artist Name':
            case 'Artwork Title':
            case 'Work Type':
            case 'Media':
            case 'Support':
                formData.artWorkInfo.values[type] = e.target.value;
                setArtformData({ ...artformData, [type]: e.target.value });
                break;
            case 'Height':
                formData.artWorkInfo.values['Dimensions'][0].value = e.target.value;
                data = formData.artWorkInfo.values['Dimensions'];
                data[0].value = e.target.value;
                setArtformData({ ...artformData, 'Dimensions': data });
                break;
            case 'Width':
                formData.artWorkInfo.values['Dimensions'][1].value = e.target.value;
                data = formData.artWorkInfo.values['Dimensions'];
                data[1].value = e.target.value;
                setArtformData({ ...artformData, 'Dimensions': data });
                break;
        }
    }

    const onCloseButtonClick = () => {
        reviewActionTriggers('close', formData);
    }

    const onSubmitButtonClick = () => {
        reviewActionTriggers('submit', formData);
    }

    return (
        <ReviewStyle>
            <div className="onstart-container on-start">
                <div className="tab">
                    <button style={{ backgroundColor: activeIndex === 0 ? '#BAA06A' : '#555862', borderRadius: '5px 0 0 5px' }} onClick={() => updateActiveIndex(0)}>Information</button>
                    <button style={{ backgroundColor: activeIndex === 1 ? '#BAA06A' : '#555862' }} onClick={() => updateActiveIndex(1)}>Images</button>
                    <button style={{ backgroundColor: activeIndex === 2 ? '#BAA06A' : '#555862', borderRadius: '0 5px 5px 0' }} onClick={() => updateActiveIndex(2)}>History</button>
                </div>

                {activeIndex === 0 && <div id="Information" className="tabcontent">
                    <h1>Information Overview:</h1>
                    <div className="field">
                        <FontAwesome name="pencil" size='2x' className="edit-icon" onClick={() => showEditField('artistName')} />
                        <div style={{ width: '200px' }}>
                            <span className="field-label">Artist Name</span>
                            {
                                !enableEditField.artistName ?
                                    <span className="field-value">{artformData['Artist Name']}</span> :
                                    <input type='text' className='input-type'
                                        value={artformData['Artist Name']}
                                        onChange={(e) => onChangeInput(e, 'Artist Name')}
                                        style={{ color: 'black' }} />
                            }
                        </div>
                    </div>
                    <div className="field">
                        <FontAwesome name="pencil" size='2x' className="edit-icon" onClick={() => showEditField('title')} />
                        <div style={{ width: '200px' }}>
                            <span className="field-label">Title</span>
                            {
                                !enableEditField.title ?
                                    <span className="field-value">{artformData['Artwork Title']}</span> :
                                    <input type='text' className='input-type'
                                        value={artformData['Artwork Title']}
                                        onChange={(e) => onChangeInput(e, 'Artwork Title')}
                                        style={{ color: 'black' }} />
                            }
                        </div>
                    </div>
                    <div className="field">
                        <FontAwesome name="pencil" size='2x' className="edit-icon" onClick={() => showEditField('workType')} />
                        <div style={{ width: '200px' }}>
                            <span className="field-label">Work Type</span>
                            {
                                !enableEditField.workType ?
                                    <span className="field-value">{artformData['Work Type']}</span> :
                                    <select name="workType" id="workType"
                                        value={artformData['Work Type']}
                                        onChange={(e) => onChangeInput(e, 'Work Type')} style={{ color: 'black' }}>
                                        <option value="Painting">Painting</option>
                                        <option value="Drawing">Drawing</option>
                                        <option value="Print">Print</option>
                                        <option value="Photograph">Photograph</option>
                                        <option value="Not sure">Not sure</option>
                                        <option value="Other">Other...</option>
                                    </select>
                            }
                        </div>
                    </div>
                    <div className="field">
                        <FontAwesome name="pencil" size='2x' className="edit-icon" onClick={() => showEditField('media')} />
                        <div style={{ width: '200px' }}>
                            <span className="field-label">Media</span>
                            {
                                !enableEditField.media ?
                                    <span className="field-value">{artformData['Media']}</span> :
                                    <select name="media" id="media"
                                        value={artformData['Media']}
                                        onChange={(e) => onChangeInput(e, 'Media')} style={{ color: 'black' }}>
                                        <option value="Oil">Oil</option>
                                        <option value="Acrylic">Acrylic</option>
                                        <option value="Watercolor">Watercolor</option>
                                        <option value="Not sure">Not sure</option>
                                        <option value="Other">Other...</option>
                                    </select>
                            }
                        </div>
                    </div>
                    <div className="field">
                        <FontAwesome name="pencil" size='2x' className="edit-icon" onClick={() => showEditField('support')} />
                        <div style={{ width: '200px' }}>
                            <span className="field-label">Support</span>
                            {
                                !enableEditField.support ?
                                    <span className="field-value">{artformData['Support']}</span> :
                                    <select name="support" id="support"
                                        value={artformData['Support']}
                                        onChange={(e) => onChangeInput(e, 'Support')}
                                        style={{ color: 'black' }}>
                                        <option value="Canvas">Canvas</option>
                                        <option value="Wood">Wood</option>
                                        <option value="Linen">Linen</option>
                                        <option value="Paper">Paper</option>
                                        <option value="Not sure">Not sure</option>
                                        <option value="Other">Other...</option>
                                    </select>
                            }
                        </div>
                    </div>
                    <div className="field">
                        <FontAwesome name="pencil" size='2x' className="edit-icon" onClick={() => showEditField('dimensions')} />
                        <div style={{ width: '200px' }}>
                            <span className="field-label">Dimensions</span>
                            {
                                !enableEditField.dimensions ?
                                    <span className="field-value">{getDimensionData()}</span> :
                                    <div>
                                        <div className="custom-div">
                                            <div className="header">Height</div>
                                            <span className="arrows color-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-up" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z" />
                                                </svg>
                                            </span>
                                            <input className="number-type" type="number"
                                                value={artformData['Dimensions'][0].value}
                                                onChange={(e) => onChangeInput(e, 'Height')} 
                                            />
                                            <span className="color-white">{artformData['Dimensions'][0].type}</span>
                                        </div>
                                        <div className="custom-div">
                                            <div className="header">Width</div>
                                            <span className="arrows color-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-right" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z" />
                                                </svg>
                                            </span>
                                            <input className="number-type" type="number"
                                                value={artformData['Dimensions'][1].value}
                                                onChange={(e) => onChangeInput(e, 'Width')} 
                                            />
                                            <span className="color-white">{artformData['Dimensions'][1].type}</span>
                                        </div>
                                    </div>
                            }
                        </div>
                    </div>
                </div>}

                {activeIndex === 1 && <div id="Images" className="tabcontent">
                    <h1>Images</h1>
                </div>}

                {activeIndex === 2 && <div id="History" className="tabcontent">
                    <h1>History</h1>
                </div>}

                <div style={{ textAlign: 'center', width: '100%' }}>
                    <Button
                        className="rvw_btn"
                        onClick={() => onCloseButtonClick()}
                        style={{ height: '50px', width: '130px', alignSelf: 'center', margin: '10px', borderRadius: '50px', backgroundColor: '#BAA06A', fontSize: '20px', fontWeight: 'bolder', color: '#0B1A23' }}
                    >
                        Close
                    </Button>
                    <Button
                        className="sbmt_btn"
                        onClick={() => onSubmitButtonClick()}
                        style={{ height: '50px', width: '130px', margin: '10px', borderRadius: '50px', backgroundColor: '#00FF87', fontSize: '20px', fontWeight: 'bolder', color: '#0B1A23' }}
                    >
                        Submit
                    </Button>
                </div>
            </div>
        </ReviewStyle >
    )
}
