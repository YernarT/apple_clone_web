import styled, { createGlobalStyle } from 'styled-components';

export const ResetCss = createGlobalStyle`
* {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
}
`;

export const AppStyled = styled.div`
	width: 100%;
	height: 100vh;
`;

export const Canvas = styled.canvas`
	width: 100%;
	height: 100%;
`;
