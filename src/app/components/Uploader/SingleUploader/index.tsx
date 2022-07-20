import * as React from 'react';

import styled from 'styled-components/macro';
import { StyleConstants } from 'styles/StyleConstants';
import { ReactComponent as ImageIcon } from './assets/image-icon.svg';

import Dropzone from 'react-dropzone';

type Props = {
  type: 'image' | 'document';
};

export function SingleUploader(props: Props) {
  const { type } = props;

  const [binary_data, setBinary_data] = React.useState<string>('');

  const onDrop = React.useCallback(acceptedFiles => {
    acceptedFiles.forEach(file => {
      const reader = new FileReader();

      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        setBinary_data(binaryStr as string);
        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
      reader.readAsDataURL(file);
    });
  }, []);

  console.log(binary_data);

  return (
    <Container>
      <Content>
        <IconWrapper>{type === 'image' ? <ImageIcon /> : 'NaN'}</IconWrapper>
        <Dropzone onDrop={onDrop}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
              </div>
            </section>
          )}
        </Dropzone>
        <div>
          <img src={binary_data} alt="" />
        </div>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const Content = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;

  border-radius: ${StyleConstants.BUTTON_BORDER_RADIUS};
  border: 1px dashed ${p => p.theme.borderLight};
  padding: 1rem;
`;

const IconWrapper = styled.div``;
