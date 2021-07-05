import React, { useEffect } from "react";
import { ReviewStyle } from './style';
import { Button } from '../buttons/buttons';


export default function Review({ loadNextSection, formData }) {
    let [activeIndex, setActiveIndex] = React.useState(0);
    let [values, setValues] = React.useState({});

    useEffect(() => {

    });

    const updateActiveIndex = (index) => {
        setActiveIndex(index)
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
                        <button style={{ float: 'right' }}>edit</button>
                        <div style={{ width: '200px' }}>
                            <span className="field-label">Artist Name</span>
                            <span className="field-value">{formData.artWorkInfo.values['Artist Name']}</span>
                        </div>
                    </div>
                    <div className="field">
                        <button style={{ float: 'right' }}>edit</button>
                        <div style={{ width: '200px' }}>
                            <span className="field-label">Title</span>
                            <span className="field-value">{formData.artWorkInfo.values['Artwork Title']}</span>
                        </div>
                    </div>
                    <div className="field">
                        <button style={{ float: 'right' }}>edit</button>
                        <div style={{ width: '200px' }}>
                            <span className="field-label">Work Type</span>
                            <span className="field-value">{formData.artWorkInfo.values['Work Type']}</span>
                        </div>
                    </div>
                    <div className="field">
                        <button style={{ float: 'right' }}>edit</button>
                        <div style={{ width: '200px' }}>
                            <span className="field-label">Media</span>
                            <span className="field-value">{formData.artWorkInfo.values['Media']}</span>
                        </div>
                    </div>
                    <div className="field">
                        <button style={{ float: 'right' }}>edit</button>
                        <div style={{ width: '200px' }}>
                            <span className="field-label">Support</span>
                            <span className="field-value">{formData.artWorkInfo.values['Support']}</span>
                        </div>
                    </div>
                    <div className="field">
                        <button style={{ float: 'right' }}>edit</button>
                        <div style={{ width: '200px' }}>
                            <span className="field-label">Dimensions</span>
                            <span className="field-value">{formData.artWorkInfo.values['Artist Name']}</span>
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
                        style={{ height: '50px', width: '130px', alignSelf: 'center', margin: '10px', borderRadius: '50px', backgroundColor: '#BAA06A', fontSize: '20px', fontWeight: 'bolder', color: '#0B1A23' }}
                    >
                        Close
                    </Button>
                    <Button
                        className="sbmt_btn"
                        style={{ height: '50px', width: '130px', margin: '10px', borderRadius: '50px', backgroundColor: '#00FF87', fontSize: '20px', fontWeight: 'bolder', color: '#0B1A23' }}
                    >
                        Submit
                    </Button>
                </div>
            </div>
        </ReviewStyle >
    )
}
