import React from 'react';
import { Row, Col } from 'antd';
import FontAwesome from 'react-fontawesome';
import { TemplateStyles as TemplateSub } from './style';

export default function LeftTab() {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const formData = {
        artistName: 'Pable Picasso',
        title: 'Head of a Woman',
        workType: 'Painting',
        media: 'Oil',
        support: 'Linen',
        dimensions: '14 x 15.75 in (35.5 x 40.5 cm)',
        year: '1903'
    };

    const completedData = {
        artistName: true,
        title: true,
        workType: true,
        media: true,
        support: false,
        dimensions: false,
        year: false
    };

    const flagStage = 'support';

    const updateActiveIndex = index => {
        setActiveIndex(index);
    };

    const onCheckboxChange = (event, type) => {
        console.log(type, event.checked);
    }

    return (
        <TemplateSub>
            <div className="mainContainer">
                <div className="tab">
                    <button
                        style={{ color: activeIndex === 0 ? '#BAA06A' : 'white', borderBottom: activeIndex === 0 ? '4px solid #BAA06A' : '2px solid #BAA06A', fontWeight: activeIndex === 0 ? '600' : '200' }}
                        onClick={() => updateActiveIndex(0)}
                    >
                        Seller Info
                    </button>
                    <button
                        style={{ color: activeIndex === 1 ? '#BAA06A' : 'white', borderBottom: activeIndex === 1 ? '4px solid #BAA06A' : '2px solid #BAA06A', fontWeight: activeIndex === 1 ? '600' : '200' }}
                        onClick={() => updateActiveIndex(1)}
                    >
                        Cataloging
                    </button>
                </div>
                {activeIndex === 0 && (
                    <div className="tabcontent">
                        <Row>
                            <Col lg={12} md={12} sx={12} className="tabCol">Artist</Col>
                            <Col lg={12} md={12} sx={12} className="tabDataCol">{formData['artistName']}</Col>
                        </Row>
                        <Row>
                            <Col lg={12} md={12} sx={12} className="tabCol">Title</Col>
                            <Col lg={12} md={12} sx={12} className="tabCol tabDataCol">{formData['title']}</Col>
                        </Row>
                        <Row>
                            <Col lg={12} md={12} sx={12} className="tabCol">Work Type</Col>
                            <Col lg={12} md={12} sx={12} className="tabCol tabDataCol">{formData['workType']}</Col>
                        </Row>
                        <Row>
                            <Col lg={12} md={12} sx={12} className="tabCol">Media</Col>
                            <Col lg={12} md={12} sx={12} className="tabCol tabDataCol">{formData['media']}</Col>
                        </Row>
                        <Row>
                            <Col lg={12} md={12} sx={12} className="tabCol">Support</Col>
                            <Col lg={12} md={12} sx={12} className="tabCol tabDataCol">{formData['support']}</Col>
                        </Row>
                        <Row>
                            <Col lg={12} md={12} sx={12} className="tabCol">Dimensions</Col>
                            <Col lg={12} md={12} sx={12} className="tabCol tabDataCol">{formData['dimensions']}</Col>
                        </Row>
                        <Row>
                            <Col lg={12} md={12} sx={12} className="tabCol">Year</Col>
                            <Col lg={12} md={12} sx={12} className="tabCol tabDataCol">{formData['year']}</Col>
                        </Row>
                        <label className="tabCol">Seller Information:</label>
                        <div className="sellerInfo">

                        </div>
                        <Row className="alignItemsBase">
                            <Col lg={20} md={20} sx={20} className="tabCol" style={{ margin: '10px 0' }}>Additional Information</Col>
                            <Col lg={4} md={4} sx={4}><FontAwesome name="plus-circle" size="2x" className="edit-icon" /></Col>
                        </Row>
                        <Row className="alignItemsBase">
                            <Col lg={2} md={2} sx={2}>
                                <div class="round">
                                    <input type="checkbox" id="checkbox1" onChange={(event) => onCheckboxChange(event, 'Pigment/Technique')} />
                                    <label for="checkbox1"></label>
                                </div>
                            </Col>
                            <Col lg={18} md={18} sx={18} className="tabCol"><label>Pigment/Technique</label></Col>
                            <Col lg={2} md={2} sx={2}><FontAwesome name="image" className="edit-icon" /></Col>
                            <Col lg={2} md={2} sx={2}><FontAwesome name="pencil" className="edit-icon" /></Col>
                        </Row>
                        <Row className="alignItemsBase">
                            <Col lg={2} md={2} sx={2}>
                                <div class="round">
                                    <input type="checkbox" id="checkbox2" onChange={(event) => onCheckboxChange(event, 'Support')} />
                                    <label for="checkbox2"></label>
                                </div>
                            </Col>
                            <Col lg={18} md={18} sx={18} className="tabCol">Support</Col>
                            <Col lg={2} md={2} sx={2}><FontAwesome name="image" className="edit-icon" /></Col>
                            <Col lg={2} md={2} sx={2}><FontAwesome name="pencil" className="edit-icon" /></Col>
                        </Row>
                        <Row className="alignItemsBase">
                            <Col lg={2} md={2} sx={2}>
                                <div class="round">
                                    <input type="checkbox" id="checkbox3" onChange={(event) => onCheckboxChange(event, 'Signature')} />
                                    <label for="checkbox3"></label>
                                </div>
                            </Col>
                            <Col lg={20} md={20} sx={20} className="tabCol">Signature</Col>
                            <Col lg={2} md={2} sx={2}><FontAwesome name="pencil" className="edit-icon" /></Col>
                        </Row>
                        <Row className="alignItemsBase">
                            <Col lg={2} md={2} sx={2}>
                                <div class="round">
                                    <input type="checkbox" id="checkbox4" onChange={(event) => onCheckboxChange(event, 'Condition')} />
                                    <label for="checkbox4"></label>
                                </div>
                            </Col>
                            <Col lg={20} md={20} sx={20} className="tabCol">Condition</Col>
                            <Col lg={2} md={2} sx={2}><FontAwesome name="pencil" className="edit-icon" /></Col>
                        </Row>
                        <Row className="alignItemsBase">
                            <Col lg={2} md={2} sx={2}>
                                <div class="round">
                                    <input type="checkbox" id="checkbox5" onChange={(event) => onCheckboxChange(event, 'Darkest')} />
                                    <label for="checkbox5"></label>
                                </div>
                            </Col>
                            <Col lg={18} md={18} sx={18} className="tabCol">Darkest</Col>
                            <Col lg={2} md={2} sx={2}><FontAwesome name="image" className="edit-icon" /></Col>
                            <Col lg={2} md={2} sx={2}><FontAwesome name="pencil" className="edit-icon" /></Col>
                        </Row>
                        <Row className="alignItemsBase">
                            <Col lg={2} md={2} sx={2}>
                                <div class="round">
                                    <input type="checkbox" id="checkbox6" onChange={(event) => onCheckboxChange(event, 'Lightest')} />
                                    <label for="checkbox6"></label>
                                </div>
                            </Col>
                            <Col lg={18} md={18} sx={18} className="tabCol">Lightest</Col>
                            <Col lg={2} md={2} sx={2}><FontAwesome name="image" className="edit-icon" /></Col>
                            <Col lg={2} md={2} sx={2}><FontAwesome name="pencil" className="edit-icon" /></Col>
                        </Row>
                        <Row className="alignItemsBase">
                            <Col lg={2} md={2} sx={2}>
                                <div class="round">
                                    <input type="checkbox" id="checkbox7" onChange={(event) => onCheckboxChange(event, 'Eyelid Detail')} />
                                    <label for="checkbox7"></label>
                                </div>
                            </Col>
                            <Col lg={20} md={20} sx={20} className="tabCol">Eyelid Detail</Col>
                            <Col lg={2} md={2} sx={2}><FontAwesome name="pencil" className="edit-icon" /></Col>
                        </Row>
                    </div>
                )}
                {activeIndex === 1 && (
                    (
                        <div className="tabcontent">
                            <Row className="alignItemsBase">
                                <Col lg={10} md={10} sx={10} className="tabCol">Artist
                                    {!completedData['artistName'] && <FontAwesome name="plus-circle" size="2x" className="addIcon" />}
                                    {completedData['artistName'] && <FontAwesome name="check-circle" size="2x" className="checkCircle" />}
                                </Col>
                                <Col lg={2} md={2} sx={2}>
                                    {flagStage === 'artistName' && <FontAwesome name="flag" className="flagIcon" />}
                                </Col>
                                <Col lg={12} md={12} sx={12} className="tabDataCol">{formData['artistName']}</Col>
                            </Row>
                            <Row className="alignItemsBase">
                                <Col lg={10} md={10} sx={10} className="tabCol">Title
                                    {!completedData['title'] && <FontAwesome name="plus-circle" size="2x" className="addIcon" />}
                                    {completedData['title'] && <FontAwesome name="check-circle" size="2x" className="checkCircle" />}
                                </Col>
                                <Col lg={2} md={2} sx={2}>
                                    {flagStage === 'title' && <FontAwesome name="flag" className="flagIcon" />}
                                </Col>
                                <Col lg={12} md={12} sx={12} className="tabCol tabDataCol">{formData['title']}</Col>
                            </Row>
                            <Row className="alignItemsBase">
                                <Col lg={10} md={10} sx={10} className="tabCol">Work Type
                                    {!completedData['workType'] && <FontAwesome name="plus-circle" size="2x" className="addIcon" />}
                                    {completedData['workType'] && <FontAwesome name="check-circle" size="2x" className="checkCircle" />}
                                </Col>
                                <Col lg={2} md={2} sx={2}>
                                    {flagStage === 'workType' && <FontAwesome name="flag" className="flagIcon" />}
                                </Col>
                                <Col lg={12} md={12} sx={12} className="tabCol tabDataCol">{formData['workType']}</Col>
                            </Row>
                            <Row className="alignItemsBase">
                                <Col lg={10} md={10} sx={10} className="tabCol">Media
                                    {!completedData['media'] && <FontAwesome name="plus-circle" size="2x" className="addIcon" />}
                                    {completedData['media'] && <FontAwesome name="check-circle" size="2x" className="checkCircle" />}
                                </Col>
                                <Col lg={2} md={2} sx={2}>
                                    {flagStage === 'media' && <FontAwesome name="flag" className="flagIcon" />}
                                </Col>
                                <Col lg={12} md={12} sx={12} className="tabCol tabDataCol">{formData['media']}</Col>
                            </Row>
                            <Row className="alignItemsBase">
                                <Col lg={10} md={10} sx={10} className="tabCol">Support
                                    {!completedData['support'] && <FontAwesome name="plus-circle" size="2x" className="addIcon" />}
                                    {completedData['support'] && <FontAwesome name="check-circle" size="2x" className="checkCircle" />}
                                </Col>
                                <Col lg={2} md={2} sx={2}>
                                    {flagStage === 'support' && <FontAwesome name="flag" className="flagIcon" />}
                                </Col>
                                <Col lg={12} md={12} sx={12} className="tabCol tabDataCol">{formData['support']}</Col>
                            </Row>
                            <Row className="alignItemsBase">
                                <Col lg={10} md={10} sx={10} className="tabCol">Dimensions
                                    {!completedData['dimensions'] && <FontAwesome name="plus-circle" size="2x" className="addIcon" />}
                                    {completedData['dimensions'] && <FontAwesome name="check-circle" size="2x" className="checkCircle" />}
                                </Col>
                                <Col lg={2} md={2} sx={2}>
                                    {flagStage === 'dimensions' && <FontAwesome name="flag" className="flagIcon" />}
                                </Col>
                                <Col lg={12} md={12} sx={12} className="tabCol tabDataCol">{formData['dimensions']}</Col>
                            </Row>
                            <Row className="alignItemsBase">
                                <Col lg={10} md={10} sx={10} className="tabCol">Year
                                    {!completedData['year'] && <FontAwesome name="plus-circle" size="2x" className="addIcon" />}
                                    {completedData['year'] && <FontAwesome name="check-circle" size="2x" className="checkCircle" />}
                                </Col>
                                <Col lg={2} md={2} sx={2}>
                                    {flagStage === 'year' && <FontAwesome name="flag" className="flagIcon" />}
                                </Col>
                                <Col lg={12} md={12} sx={12} className="tabCol tabDataCol">{formData['year']}</Col>
                            </Row>
                            <label className="tabCol">Seller Information:</label>
                            <div className="sellerInfo">

                            </div>
                            <Row className="alignItemsBase">
                                <Col lg={20} md={20} sx={20} className="tabCol" style={{ margin: '10px 0' }}>Additional Information</Col>
                                <Col lg={4} md={4} sx={4}><FontAwesome name="plus-circle" size="1.5x" className="edit-icon" /></Col>
                            </Row>
                            <Row className="alignItemsBase">
                                <Col lg={2} md={2} sx={2}>
                                    <div class="round">
                                        <input type="checkbox" id="checkbox1" onChange={(event) => onCheckboxChange(event, 'Pigment/Technique')} />
                                        <label for="checkbox1"></label>
                                    </div>
                                </Col>
                                <Col lg={18} md={18} sx={18} className="tabCol"><label>Pigment/Technique</label></Col>
                                <Col lg={2} md={2} sx={2}><FontAwesome name="image" className="edit-icon" /></Col>
                                <Col lg={2} md={2} sx={2}><FontAwesome name="pencil" className="edit-icon" /></Col>
                            </Row>
                            <Row className="alignItemsBase">
                                <Col lg={2} md={2} sx={2}>
                                    <div class="round">
                                        <input type="checkbox" id="checkbox2" onChange={(event) => onCheckboxChange(event, 'Support')} />
                                        <label for="checkbox2"></label>
                                    </div>
                                </Col>
                                <Col lg={18} md={18} sx={18} className="tabCol">Support</Col>
                                <Col lg={2} md={2} sx={2}><FontAwesome name="image" className="edit-icon" /></Col>
                                <Col lg={2} md={2} sx={2}><FontAwesome name="pencil" className="edit-icon" /></Col>
                            </Row>
                            <Row className="alignItemsBase">
                                <Col lg={2} md={2} sx={2}>
                                    <div class="round">
                                        <input type="checkbox" id="checkbox3" onChange={(event) => onCheckboxChange(event, 'Signature')} />
                                        <label for="checkbox3"></label>
                                    </div>
                                </Col>
                                <Col lg={20} md={20} sx={20} className="tabCol">Signature</Col>
                                <Col lg={2} md={2} sx={2}><FontAwesome name="pencil" className="edit-icon" /></Col>
                            </Row>
                            <Row className="alignItemsBase">
                                <Col lg={2} md={2} sx={2}>
                                    <div class="round">
                                        <input type="checkbox" id="checkbox4" onChange={(event) => onCheckboxChange(event, 'Condition')} />
                                        <label for="checkbox4"></label>
                                    </div>
                                </Col>
                                <Col lg={20} md={20} sx={20} className="tabCol">Condition</Col>
                                <Col lg={2} md={2} sx={2}><FontAwesome name="pencil" className="edit-icon" /></Col>
                            </Row>
                            <Row className="alignItemsBase">
                                <Col lg={2} md={2} sx={2}>
                                    <div class="round">
                                        <input type="checkbox" id="checkbox5" onChange={(event) => onCheckboxChange(event, 'Darkest')} />
                                        <label for="checkbox5"></label>
                                    </div>
                                </Col>
                                <Col lg={18} md={18} sx={18} className="tabCol">Darkest</Col>
                                <Col lg={2} md={2} sx={2}><FontAwesome name="image" className="edit-icon" /></Col>
                                <Col lg={2} md={2} sx={2}><FontAwesome name="pencil" className="edit-icon" /></Col>
                            </Row>
                            <Row className="alignItemsBase">
                                <Col lg={2} md={2} sx={2}>
                                    <div class="round">
                                        <input type="checkbox" id="checkbox6" onChange={(event) => onCheckboxChange(event, 'Lightest')} />
                                        <label for="checkbox6"></label>
                                    </div>
                                </Col>
                                <Col lg={18} md={18} sx={18} className="tabCol">Lightest</Col>
                                <Col lg={2} md={2} sx={2}><FontAwesome name="image" className="edit-icon" /></Col>
                                <Col lg={2} md={2} sx={2}><FontAwesome name="pencil" className="edit-icon" /></Col>
                            </Row>
                            <Row className="alignItemsBase">
                                <Col lg={2} md={2} sx={2}>
                                    <div class="round">
                                        <input type="checkbox" id="checkbox7" onChange={(event) => onCheckboxChange(event, 'Eyelid Detail')} />
                                        <label for="checkbox7"></label>
                                    </div>
                                </Col>
                                <Col lg={20} md={20} sx={20} className="tabCol">Eyelid Detail</Col>
                                <Col lg={2} md={2} sx={2}><FontAwesome name="pencil" className="edit-icon" /></Col>
                            </Row>
                        </div>
                    )
                )}
            </div>

        </TemplateSub>
    )
};
