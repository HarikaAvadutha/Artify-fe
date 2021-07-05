import Styled from 'styled-components';

const ReviewStyle = Styled.div`
    .on-start {
        text-align: center;
        min-height: 500px;
        max-width: 300px;
        margin: auto;
    }
    .tab {
        overflow: hidden;
    }
    
    .tab button {
        background-color: #555862;
        border: none;
        outline: none;
        cursor: pointer;
        transition: 0.3s;
        width: 96px;
        padding: 5px;
        margin: 1px;
        color: white;
        margin-bottom: 30px;
    }
    
    .tabcontent {
        color: white;
        text-align: left;
        padding: 5px;
        h1 {
            font-size: 20px;
            font-weight: bolder;
        }
    }

    .field {
        border-top: 2px solid grey;
        padding: 5px 5px 1px 5px;
        .field-label {
            font-size: 14px;
            color: #BAA06A;
            font-weight: 700;
            display: block;
        }
        .field-value {
            font-size: 12px;
            color: #FFFFFF;
            margin-bottom: 2px;
        }
    }

`;


export { ReviewStyle };
