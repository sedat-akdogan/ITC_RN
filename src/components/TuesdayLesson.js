import React from 'react';
import { SafeAreaView, TextInput } from 'react-native';


class TuesdayLesson extends React.Component {
    constructor(props) {
        super(props);

        const { initialDisplayName } = props;

        this.state={
            myTextValue: initialDisplayName,
            pressCount: 0,
        };
    }

    render() {
        const { children, bgColor } = this.props;
        return(
            <SafeAreaView style={{backgroundColor: bgColor, marginTop: 10}}>
                <TextInput 
                    value={this.state.myTextValue}
                    onChangeText={changedText => {
                        this.setState({myTextValue: changedText})
                    }}
                    style={{height: 44}}
                />
            </SafeAreaView>
        );
    }
}

export default TuesdayLesson;