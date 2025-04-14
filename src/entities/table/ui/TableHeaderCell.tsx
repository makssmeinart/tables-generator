import styled from '@emotion/styled'

import copyIcon from '../../../shared/assets/icons/copyIcon.svg'
import { TableColumn } from '../../../shared/types/tables'

interface Props {
  column: TableColumn
  onClick?: () => void
}

const renderIcon = () => {
  return <img src={copyIcon} alt="copy icon" width={64} height={21} />
}

export const TableHeaderCell = ({ column, onClick }: Props) => {
  return (
    <TableHeaderCellStyled>
      <LabelWrapper>
        <span>{column.label}</span>
        {column.interactiveIcon && (
          <IconWrapper onClick={onClick}>{renderIcon()}</IconWrapper>
        )}
      </LabelWrapper>
    </TableHeaderCellStyled>
  )
}

const TableHeaderCellStyled = styled('th')`
  padding: 6px 4px;
  color: rgba(250, 250, 250, 0.5);
  background-color: #0a508b;
  border: 1px solid #0a508b;
  text-align: left;
`

const LabelWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const IconWrapper = styled('span')`
  display: flex;
  align-items: center;
  cursor: pointer;
`
