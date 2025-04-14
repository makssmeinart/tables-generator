import styled from '@emotion/styled'
import { useSelect } from '../lib/useSelect'

import { LOCATION_SELECT_OPTIONS } from '../../../constants/table'

import arrowUpIcon from '../../../assets/icons/arrowUpIcon.svg'
import arrowDownIcon from '../../../assets/icons/arrowDownIcon.svg'

type SelectOption = typeof LOCATION_SELECT_OPTIONS

interface Props {
  options: SelectOption
  value: string
  onChange: (fieldKey: string, value: string) => void
}

export const Select = ({ options, value, onChange }: Props) => {
  const { isOpen, toggleSelect, handleOptionClick } = useSelect(
    'fourthCol',
    onChange
  )

  return (
    <SelectContainerStyled>
      <SelectTriggerStyled $opened={isOpen} onClick={toggleSelect}>
        {value}
        <ArrowStyled>
          <img
            src={isOpen ? arrowUpIcon : arrowDownIcon}
            alt="Dropdown state indicator"
          />
        </ArrowStyled>
      </SelectTriggerStyled>

      {isOpen && (
        <SelectDropdownStyled>
          {options.map((option) => (
            <SelectOptionStyled
              key={option}
              onClick={() => handleOptionClick(option)}
              $selected={value === option}
            >
              {option}
            </SelectOptionStyled>
          ))}
        </SelectDropdownStyled>
      )}
    </SelectContainerStyled>
  )
}

const SelectContainerStyled = styled('div')`
  position: relative;
  width: 100%;
  font-family: sans-serif;
`

const SelectTriggerStyled = styled('div')<{ $opened: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px;
  border-radius: 4px;
  border: 1px solid #e6ecef;
  background-color: white;
  cursor: pointer;
  font-weight: 400;
  font-size: 12px;
  color: #212229;
  transition: border 0.3s ease;

  border-color: ${(props) => (props.$opened ? '#a0c4ff' : '#e6ecef')};
`

const ArrowStyled = styled('span')`
  display: inline-flex;
  margin-left: 10px;

  img {
    width: 9px;
    height: 6px;
  }
`

const SelectDropdownStyled = styled('ul')`
  position: absolute;
  top: 110%;
  left: 0;
  right: 0;
  padding: 0;
  margin: 0;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0px 2px 8px 0px #00000014;
`

const SelectOptionStyled = styled('li')<{ $selected: boolean }>`
  padding: 14px 0;
  margin: 0 14px;
  list-style: none;
  cursor: pointer;
  color: ${(props) => (props.$selected ? '#212229' : '#868A8D')};
  font-weight: 400;
  font-size: 12px;
  border-bottom: 1px solid #e6ecef;
  transition: color 0.3s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    color: #a0c4ff;
  }
`
