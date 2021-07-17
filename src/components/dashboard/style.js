import Styled from 'styled-components';

const TemplateStyles = Styled.div`
    .header {
        padding: 30px 20px;
        color: white;
        font-weight: bold;
    }
    .tableHeader {
        padding: 0 20px;
        color: #CACDD5;
    }
    .tableItems {
        padding: 10px 20px;
        color: #9598A5;
    }
    .borderLine {
        margin: 0 20px;
        margin-top: 3px;
        border: 1px solid  #383A3F;
    }
    .textWrapEllipse {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .colorGreen {
        color: #00FF87;
        padding-left: 10px;
    }

    .colorYellow {
        padding-left: 10px;
        color: #FFB928;
    }
`;

export { TemplateStyles };
