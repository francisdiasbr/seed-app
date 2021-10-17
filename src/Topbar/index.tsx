import React from 'react'
import { Button } from '@naturacosmeticos/natds-react'
import { TopbarContainer, TopbarLogo, TopbarMenu } from '../Styleguide/styled'

const Topbar = () => {
  return (
    <TopbarContainer>
      <TopbarLogo>
        <h1>The Seed App</h1>
      </TopbarLogo>
      <TopbarMenu>
        <Button
          iconPosition='left'
          iconName='outlined-product-vegan'
          showIcon={true}
          onClick={() => console.log('button')}
        >
          BUTTON
        </Button>
      </TopbarMenu>
    </TopbarContainer>
  )
}

export default Topbar
