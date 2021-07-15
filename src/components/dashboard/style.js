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
    .borderLine {
        margin: 0 20px;
        border: 1px solid  #383A3F;
    }
    .textWrapEllipse {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

export { TemplateStyles };
