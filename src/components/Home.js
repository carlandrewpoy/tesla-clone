import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
      <Section 
        title = "Model S"
        description = "Order Online for Touchless Delivery"
        src = "model-s.jpg"
        leftbttn = "custom order"
        rightbttn = "existing inventory"
      />
      <Section 
        title = "Model Y"
        description = "Order Online for Touchless Delivery"
        src = "model-y.jpg"
        leftbttn = ""
        rightbttn = "existing inventory"
      />
      <Section 
        title = "Model 3"
        description = "Order Online for Touchless Delivery"
        src = "model-3.jpg"
        leftbttn = "custom order"
        rightbttn = ""
      />
      <Section 
        title = "Model X"
        description = "Order Online for Touchless Delivery"
        src = "model-x.jpg"
        leftbttn = "custom order"
        rightbttn = "existing inventory"
      />
      <Section 
        title = "Lowest Cost Solar Panels in America"
        description = "Money-back guarantee"
        src = "solar-panel.jpg"
        leftbttn = "order now"
        rightbttn = "Learn more"
      />
      <Section 
        title = "Solar for New Roofs"
        description = "Solar Roof Costs Less Than a New Roof Plus Panels"
        src = "solar-roof.jpg"
        leftbttn = ""
        rightbttn = "learn more"
      />
      <Section 
        title = "Accessories"
        description = ""
        src = "accessories.jpg"
        leftbttn = "shop now"
        rightbttn = ""
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh;
  color: red;
`