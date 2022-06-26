import * as React from 'react';
import { PrimaryButton } from 'app/components/common/buttons/primary';
import { P } from 'app/pages/NotFoundPage/P';

import styled from 'styled-components/macro';
import { StyleConstants } from 'styles/StyleConstants';
import { ReactComponent as ImageIcon } from './assets/image-icon.svg';

type Props = {
  type: 'image' | 'document';
  uploads?: number;
};

const renderUploads = (type: string, uploads?: number) => {
  for (let i = 0; i < uploads || 1; i++) {
    return (
      <>
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
      </>
    );
  }
};

export function MultipleUploader(props: Props) {
  const { type, uploads } = props;
  return <Container>{renderUploads(type, uploads)}</Container>;
}

MultipleUploader.defaultProps = {
  uploads: 1,
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
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
