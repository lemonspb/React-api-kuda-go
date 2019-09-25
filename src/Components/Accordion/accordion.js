import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

export default class AccordionCard extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state
    const {address,timetable,phone,subway} = this.props 
    return (
      <Accordion>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          Адрес
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
            {address}
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
         Метро
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
            {subway}
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          График работы 
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
        
          <p>
            {timetable}
          </p>
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 3}
          index={3}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          Телефон
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
        
          <p>
            {phone}
          </p>
        </Accordion.Content>
      </Accordion>
    )
  }
}
