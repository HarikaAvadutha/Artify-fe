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
        min-height: 50px;
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

    .edit-icon {
        float: right;
        padding: 5px;
    }

    .custom-div {
        padding: 5px;
        min-width: 220px;
        .header {
            font-size: 14px;
            font-weight: 600;
            min-width: 50px;
            display:inline-block;
        }
        .number-type {
            width: 60px;
            font-size: 12px;
            background-color: #BAA06A;
            color: black;
            text-align: center;
            border-raidus: 20px;
            margin: 0 5px;
        }
        .arrows {
            margin: 10px;
            min-width: 10px;
        }
    }

    .input-type {
        border-radius: 20px;
        background-color: #BAA06A;
        padding:5px;
        font-size:16px;
        font-weight:600;
        color: black;
    }

`;


export { ReviewStyle };
