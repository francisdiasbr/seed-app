import styled from 'styled-components'

// Card
// Divs
export const StoryContainer = styled.div`
  width: 100%;
`

// Headings e p
export const CardTitle = styled.h1`
  font-size: 20px;
  color: paleturquoise;
`
export const CardText = styled.p`
  display: flex;
  font-size: 16px;
`

// Topbar
// Divs

export const TopbarContainer = styled.div`
  position: sticky;
  width: 100%;
`

export const TopbarLogo = styled.div`
  align-content: space-around;
  align-items: center;
  display: flex;
  position: sticky;
  width: 100%;
`

export const TopbarMenu = styled.div`
  align-content: space-around;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 10px;
  position: sticky;
  width: calc(100% - 20px);
`

//
