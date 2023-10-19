import styled, {css} from "styled-components";
import PropTypes from "prop-types";

const ClickableContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-end;
&:not(:last-child) {
  margin-bottom: ${(props) => props.theme.space.m};
}
${(props) =>
  props.onClick &&
  css`
    cursor: pointer;
  `}
`;

const ColumnContainer = ({children, onClick}) => (
    <ClickableContainer onClick={onClick}>
        {children}
    </ClickableContainer>
)

ColumnContainer.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
}

export default ColumnContainer