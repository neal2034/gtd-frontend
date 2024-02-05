// import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Box, BoxProps } from '@mui/material'
import { forwardRef } from 'react'

interface Props extends BoxProps {
  children: React.ReactNode
  title: string
  meta?: React.ReactNode
}

const Page = forwardRef<HTMLDivElement, Props>(
  ({ children, title, meta, ...props }: Props, ref: React.Ref<HTMLDivElement>) => {
    return (
      <>
        <Helmet>
          <title>{`${title}`}</title>
          {meta}
        </Helmet>
        <Box ref={ref} {...props}>
          {children}
        </Box>
      </>
    )
  },
)

export default Page
