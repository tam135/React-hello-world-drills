import React from 'react';
import './Accordion.css';

class Accordion extends React.Component {
    static defaultProps = {
        sections: [
            {
                title: 'Section 1',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            },
            {
                title: 'Section 2',
                content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
            },
            {
                title: 'Section 3',
                content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
            },
        ]
    }

    state = {
        currentTabIndex: 0
    };


    handleButtonClick = (index) => {
        this.setState({currentTabIndex: index})
    }
    
    renderButtons() {
        return this.props.sections.map((section, index) => (
            <button key = {index} onClick={() => this.handleButtonClick(index)}>
                {section.title}
            </button>
        ))
    }

    renderContent() {
        const currentTab = this.props.sections[this.state.currentTabIndex]
        return (
            <p className= 'Accordion_item'>
            {currentTab.content}
            </p>
        )
    }

    render() {
        return (
            <div>
                <ul className = 'Accordion'>
                    <li>
                        {this.renderButtons()}
                        {this.props.sections.length && this.renderContent()}
                    </li>
                </ul>
            </div>
        )
    }
}

export default Accordion