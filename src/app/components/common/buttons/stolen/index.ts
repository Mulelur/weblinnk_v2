import styled from 'styled-components';
import { StyleConstants } from 'styles/StyleConstants';

export const StolenButton = styled.button`
  background-color: ${p => p.theme.background};
  color: ${p => p.theme.primary};
  display: table;
  border: none;
  position: relative;
  font-weight: 600;
  font-size: 14px;
  font-family: inherit;
  margin: 0px;
  outline: none;
  user-select: none;
  white-space: nowrap;
  text-align: center;
  appearance: none;
  border-radius: ${StyleConstants.BUTTON_BORDER_RADIUS};
  line-height: 20px;
  letter-spacing: -0.125px;
  padding: 10px var(--button-padding-h, 24px);
  cursor: pointer;
  transition: background-color 0.2s ease 0s, box-shadow 0.2s ease 0s,
    color 0.2s ease 0s, transform 0.2s ease 0s;
  transform: scale(var(--button-scale, 1)) translateZ(0);
  box-shadow: 0 0 0 var(--button-outline, 0px)
      var(--button-outline-color, #5c89de4d),
    inset 0 -1px 1px 0 var(--button-inner-shadow, rgba(38 38 44 / 15%)),
    inset 0 var(--button-shine-y, 1px) 0 0
      var(--button-shine, rgba(255 255 255 / 25%)),
    0 1px 2px 0 var(--button-shadow, rgba(38 38 44 / 25%));
`;
