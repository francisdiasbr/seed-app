import React from 'react'
import { Card } from '@naturacosmeticos/natds-react'
import { StoryContainer, CardText, CardTitle } from '../Styleguide/styled'

const Strains = () => {
  return (
    <StoryContainer>
      <Card>
        <CardTitle>Strain 1</CardTitle>
        <CardText className='natds-text-0-2-1'>
          Lorem ipslum Lorem ipslum Lorem ipslum Lorem ipslum Lorem ipslum
        </CardText>
      </Card>
      <Card>
        <CardTitle>Strain 2</CardTitle>
        <CardText className='natds-text-0-2-1'>Lorem i</CardText>
      </Card>
    </StoryContainer>
  )
}

export default Strains
