import React, { useEffect } from "react";
import Field from './field';
import { OnStart as Start } from './style';
import FeatherIcon from 'feather-icons-react';

let currentScreenCnt = 1;
export default function OnStart({ loadNextSection }) {
  let [activeIndex, setActiveIndex] = React.useState(0);
  let [values, setValues] = React.useState({});

  const formData = [
    {
      index: 0,
      id: 'Artist Name',
      type: 'input',
      dataType: 'text',
      placeholder: 'Enter Artist Name',
      value: '',
      validation: {
        required: true
      }
    },
    {
      index: 1,
      id: "Artwork Title",
      type: 'input',
      dataType: 'text',
      placeholder: 'Enter Artwork Title:',
      value: '',
      validation: {
        required: false
      }
    },
    {
      index: 2,
      id: 'Work Type',
      type: 'select',
      dataType: 'text',
      options: [
        {
          index: 0,
          value: 'Painting',
          displayValue: 'Painting'
        },
        {
          index: 1,
          value: 'Drawing',
          displayValue: 'Drawing'
        },
        {
          index: 2,
          value: 'Print',
          displayValue: 'Print'
        },
        {
          index: 3,
          value: 'Photograph',
          displayValue: 'Photograph'
        },
        {
          index: 4,
          value: 'Not sure',
          displayValue: 'Not sure'
        },
        {
          index: 5,
          value: 'Other',
          displayValue: 'Other...'
        }
      ],
      value: 'Painting',
      validation: {
        required: true
      },
    },
    {
      index: 3,
      id: "Media",
      type: 'select',
      dataType: 'text',
      options: [
        {
          index: 0,
          value: 'Oil',
          displayValue: 'Oil'
        },
        {
          index: 1,
          value: 'Acrylic',
          displayValue: 'Acrylic'
        },
        {
          index: 2,
          value: 'Watercolor',
          displayValue: 'Watercolor'
        },
        {
          index: 3,
          value: 'Not sure',
          displayValue: 'Not sure'
        },
        {
          index: 4,
          value: 'Other',
          displayValue: 'Other...'
        }
      ],
      value: 'Oil',
      validation: {
        required: true
      },
    },
    {
      index: 4,
      id: "Support",
      type: 'select',
      dataType: 'text',
      options: [
        {
          index: 0,
          value: 'Canvas',
          displayValue: 'Canvas'
        },
        {
          index: 1,
          value: 'Wood',
          displayValue: 'Wood'
        },
        {
          index: 2,
          value: 'Linen',
          displayValue: 'Linen'
        },
        {
          index: 3,
          value: 'Paper',
          displayValue: 'Paper'
        },
        {
          index: 4,
          value: 'Not sure',
          displayValue: 'Not sure'
        },
        {
          index: 5,
          value: 'Other',
          displayValue: 'Other...'
        }
      ],
      value: 'Canvas',
      validation: {
        required: true
      },
    },
    {
      index: 5,
      id: "Dimensions",
      type: 'custom',
      dataType: 'number',
      config: [{
        id: "Height",
        value: "",
        type: "inches"
      }, {
        id: "Width",
        value: "",
        type: "inches"
      }],
      validation: {
        required: true
      },
    },
  ]

  useEffect(() => {
    if (currentScreenCnt === (formData.length + 1)) {
      formData.values = values;
      loadNextSection({
        name: 'artWorkInfo',
        data: formData
      });
    }
  });

  const handleNext = field => {
    if (field.type === 'custom' && field.validation.required) {
      let isAllFieldsFilled = field.config.filter(r => r.value !== '');
      if (isAllFieldsFilled.length === field.config.length) {
        currentScreenCnt += 1;
        setActiveIndex(++activeIndex);
        setValues({ ...values, [field.id]: field.config })
      }
    } else if (field.validation.required && !field.value) {
      return;
    } else if (field.validation.required && field.value) {
      currentScreenCnt += 1;
      setActiveIndex(++activeIndex);
      setValues({ ...values, [field.id]: field.value })
    } else {
      currentScreenCnt += 1;
      setActiveIndex(++activeIndex);
      setValues({ ...values, [field.id]: field.value })
    }
  };

  const checkIfActive = data => {
    return data.index === activeIndex;
  }

  const fieldChange = (event, field) => {
    field.value = event.target.value;
  }

  const renderMarkup = field => {
    if (checkIfActive(field)) {
      return (
        <Field key={field.id} fieldConfig={field}
          onNextClick={() => handleNext(field)}
          changed={(e) => fieldChange(e, field)}
          customOnChange={customOnChange}
          dimensionUnitChange={dimensionUnitChange} />
      )
    }
    return;
  }

  const customOnChange = (value, field, item) => {
    field.config.forEach(element => {
      if (element.id === item.id) {
        element.value = value
      }
    })
  }

  const dimensionUnitChange = (field) => {
    field.config.forEach(item => {
      // eslint-disable-next-line no-param-reassign
      item.type = item.type === 'inches' ? 'cm' : 'inches';
    });
  };

  return (
    <Start style={{ background: '#0B1A23'}}>
      <div className="onstart-container on-start">
        <div className="d-flex status-bar-div" style={{ minHeight: '120px' }}>
          <div className='status-update'>
            {activeIndex >0?
            <div>
            <FeatherIcon icon="check-circle" size={30} style={{color:'#BAA06A'}}/>
            </div>
            :
            <div className="status-active">
            <FeatherIcon icon="circle" size={30} style={{color:'#BAA06A', fill:'#BAA06A'}}/> 
          </div> }
          </div>
          <div className='status-update'>
            {activeIndex >1?
            <div>
            <FeatherIcon icon="check-circle" size={30} style={{color:'#BAA06A'}}/>
            </div>
            :
            activeIndex < 1?
              <FeatherIcon icon="circle" size={30} style={{color:'#BAA06A', fill:'#BAA06A', opacity:0.3}}/> :
            <div className="status-active">
            <FeatherIcon icon="circle" size={30} style={{color:'#BAA06A', fill:'#BAA06A'}}/> 
          </div> }
          </div>
          <div className='status-update'>
            {activeIndex >2?
            <div>
            <FeatherIcon icon="check-circle" size={30} style={{color:'#BAA06A'}}/>
            </div>
            :
            activeIndex < 2?
              <FeatherIcon icon="circle" size={30} style={{color:'#BAA06A', fill:'#BAA06A', opacity:0.3}}/> :
            <div className="status-active">
            <FeatherIcon icon="circle" size={30} style={{color:'#BAA06A', fill:'#BAA06A'}}/> 
          </div> }
          </div>
          <div className='status-update'>
            {activeIndex >3?
            <div>
            <FeatherIcon icon="check-circle" size={30} style={{color:'#BAA06A'}}/>
            </div>
            :
            activeIndex < 3?
              <FeatherIcon icon="circle" size={30} style={{color:'#BAA06A', fill:'#BAA06A', opacity:0.3}}/> :
            <div className="status-active">
            <FeatherIcon icon="circle" size={30} style={{color:'#BAA06A', fill:'#BAA06A'}}/> 
          </div> }
          </div>
          <div className='status-update'>
            {activeIndex >4?
            <div>
            <FeatherIcon icon="check-circle" size={30} style={{color:'#BAA06A'}}/>
            </div>
            :
            activeIndex < 4?
              <FeatherIcon icon="circle" size={30} style={{color:'#BAA06A', fill:'#BAA06A', opacity:0.3}}/> :
            <div className="status-active">
            <FeatherIcon icon="circle" size={30} style={{color:'#BAA06A', fill:'#BAA06A'}}/> 
          </div> }
          </div>
          <div className='status-update'>
            {activeIndex >5?
            <div>
            <FeatherIcon icon="check-circle" size={30} style={{color:'#BAA06A'}}/>
            </div>
            :
            activeIndex < 5?
              <FeatherIcon icon="circle" size={30} style={{color:'#BAA06A', fill:'#BAA06A', opacity:0.3}}/> :
            <div className="status-active">
            <FeatherIcon icon="circle" size={30} style={{color:'#BAA06A', fill:'#BAA06A'}}/> 
          </div> }
          </div>
        </div>
        <div>{formData.map(value => renderMarkup(value))}</div>
      </div>
    </Start>
  )
}
