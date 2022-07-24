import React, { memo } from 'react';
import styled from 'styled-components/macro';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface Props extends InputProps {
  id: string;
  label: string;
  className?: string;
  isSelected?: boolean;
}

export const Switch = memo(
  ({ id, label, className, isSelected, ...restOf }: Props) => {
    return (
      <Wrapper className={className}>
        <input
          data-test-id="checkbox"
          type="checkbox"
          id={id}
          checked={isSelected}
          {...restOf}
        />
        <label htmlFor={id}>{label}</label>
      </Wrapper>
    );
  },
);

const Wrapper = styled.div`
  display: inline-block;
  width: 62px;
  height: 30px;
  border-radius: 4px;
  background: ${p => p.theme.background};
  border: 1px solid ${p => p.theme.primary};
  box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.08);
  border-radius: 15px;
  transition: all 0.4s;
  position: relative;

  input[type='checkbox'] {
    margin: 0;
    opacity: 0;
    width: 0;
    height: 0;
    padding: 0;

    + label {
      margin: 0;
      display: inline-block;
      padding-left: 1.375rem;
      padding-top: 0.0625rem;
      position: relative;
      cursor: pointer;
      font-size: 0.875rem;
      color: ${p => p.theme.text};
      z-index: 1;

      a {
        color: ${p => p.theme.text};
        text-decoration: none;
      }

      &::after {
        display: none;
        content: '';
        position: absolute;
        display: inline-block;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        top: -0.9rem;
        left: 0.125rem;
        background-color: ${p => p.theme.background};

        background: ${p => p.theme.primary};
        border: 1px solid ${p => p.theme.primary};
        box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.2);
      }

      &:hover {
        &::before {
          border-color: ${p => p.theme.primary};
        }
      }
    }

    &:disabled {
      + label {
        opacity: 0.6;
        cursor: auto;

        &:hover {
          &::before {
            border-color: ${p => p.theme.border};
          }
        }
      }
    }

    &:focus {
      + label {
        &::before {
          box-shadow: 0 0 0 3px
            ${p =>
              p.theme.primary.replace(
                /rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,
                'rgba$1,0.2)',
              )};
        }
      }
    }

    &:checked {
      + label {
        &::before {
          background-color: ${p => p.theme.primary};
          border-color: ${p => p.theme.primary};
        }

        &::after {
          display: inline-block;
          transform: translateX(2rem);
        }
      }
    }
  }
`;
