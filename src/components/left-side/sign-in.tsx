import React from 'react'

import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '../ui/page-header'

const SignInLeft = () => {
  return (
    <PageHeader>
      <PageHeaderHeading>Sign in</PageHeaderHeading>
      <PageHeaderDescription className="!text-pretty !max-w-lg">
        Save your history of search and previous results
      </PageHeaderDescription>
    </PageHeader>
  )
}

export default SignInLeft
