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
  const l: any = [];

  for (let i = 0; i < 2; i++) {
    const el = (
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

    l.push(el);
  }

  return l;
};

export function MultipleUploader(props: Props) {
  const { type, uploads } = props;

  const reEl = renderUploads(type, uploads);

  console.log(reEl);

  return (
    <Container>
      {reEl.map(item => {
        return item;
      })}
    </Container>
  );
}

MultipleUploader.defaultProps = {
  uploads: 1,
};

const Container = styled.div`
  width: 100%;
  max-width: 34rem;
  padding: 1rem 0;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;
`;

const Content = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;

  padding: 1rem;

  border-radius: ${StyleConstants.BUTTON_BORDER_RADIUS};
  border: 1px dashed ${p => p.theme.borderLight};
`;

const IconWrapper = styled.div``;
