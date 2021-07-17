import Styled from 'styled-components';

const TemplateStyles = Styled.div`
    .mainContainer {
        background-color: #343941;
        border-radius: 15px;
        min-height: 300px;
        margin-bottom: 20px;
    }

    .tab {
        overflow: hidden;
        padding: 20px;
    }

    .tab button {
        background-color: #343941;
        border: none;
        outline: none;
        cursor: pointer;
        transition: 0.3s;
        width: 50%;
        padding: 5px;
        color: white;
        padding-top: 20px;
        border-bottom: 2px solid #BAA06A;
    }

    .tabcontent {
        padding: 0 20px;
        color: white;
    }

    .tabCol {
        font-size: 12px;
        padding: 5px 0px;
    }

    .tabDataCol {
        color: #9598A5;
    }

    .edit-icon {
        float: right;
        padding: 5px;
        color: #BAA06A;
        margin: auto;
    }

    .checkCircle {
        float: right;
        color: #00FF87;
        padding-right: 2px;
    }

    .flagIcon {
        color: #BAA06A;
    }

    .addIcon {
        padding-right: 2px;
        float: right;
    }
    
    .alignItemsBase {
        align-items: baseline;
    }

    // rounded checkbox
    .round {
        position: relative;
      }
      
      .round label {
        background-color: #343941;
        border: 2px solid #00FF87;
        border-radius: 50%;
        cursor: pointer;
        height: 20px;
        left: 0;
        position: absolute;
        top: 0;
        width: 20px;
      }
      
      .round label:after {
        border-top: none;
        border-right: none;
        content: "";
        height: 6px;
        left: 7px;
        opacity: 0;
        position: absolute;
        top: 8px;
        transform: rotate(-45deg);
        width: 12px;
      }
      
      .round input[type="checkbox"] {
        visibility: hidden;
      }
      
      .round input[type="checkbox"]:checked + label {
        background-color: #BAA06A;
        border-color: #BAA06A;
      }
      
      .round input[type="checkbox"]:checked + label:after {
        opacity: 1;
      }

      .sellerInfo {
          background-color: #000000;
          color: #9598A5;
          height: 220px;
          padding: 5px;
          border-radius: 15px;
          font-size: 12px;
      }
`;

export { TemplateStyles };
