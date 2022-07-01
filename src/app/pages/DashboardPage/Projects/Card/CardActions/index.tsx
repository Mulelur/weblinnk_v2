import React from 'react';
import { useTranslation } from 'react-i18next';

import styled from 'styled-components/macro';
import { H4 } from 'app/components/common/typography/H4';
import { messages } from '../../../messages';

export function CardActions() {
  const { t } = useTranslation();
  return (
    <>
      <Wrapper>
        <Container>
          <H4>{t(messages.cardAction())}</H4>
        </Container>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  padding: 0 0.8rem;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
`;

const Container = styled.div``;
