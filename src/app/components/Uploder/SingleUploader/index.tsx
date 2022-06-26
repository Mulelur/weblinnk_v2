import * as React from 'react';
import { PrimaryButton } from 'app/components/common/buttons/primary';
import { P } from 'app/pages/NotFoundPage/P';

import styled from 'styled-components/macro';
import { StyleConstants } from 'styles/StyleConstants';
import { ReactComponent as ImageIcon } from './assets/image-icon.svg';

type Props = {
  type: 'image' | 'document';
};

export function SingleUploader(props: Props) {
  const { type } = props;
  return (
    <Container>
      <Content>
        <IconWrapper>{type === 'image' ? <ImageIcon /> : 'NaN'}</IconWrapper>
        <P>Drag and drop file</P>
        <PrimaryButton
          style={{
            width: '8rem',
          }}
        >
          Select
        </PrimaryButton>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;

  border-radius: ${StyleConstants.BUTTON_BORDER_RADIUS};
  border: 1px dashed #bbbb;
`;

const Preview = styled.img``;

const IconWrapper = styled.div``;
