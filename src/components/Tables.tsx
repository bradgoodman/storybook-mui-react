import React from 'react'

import MUIDataTable, { MUIDataTableProps } from 'mui-datatables'

type SimpleTableBaseProps = Pick<
  MUIDataTableProps,
  'data' | 'columns' | 'options'
>

export interface SimpleTableProps extends SimpleTableBaseProps {
  title: string
}

export const SimpleTable = ({
  title,
  columns,
  data,
  options,
}: SimpleTableProps) => {
  return (
    <MUIDataTable
      columns={columns}
      data={data}
      options={options}
      title={title}
    />
  )
}
