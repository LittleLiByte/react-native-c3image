/**
 * Created by littlebyte on 2017/5/27.
 */
import React, {Component} from 'react';
import { bool,string, func, number,object } from 'prop-types'
import {
    Image,
    ImageBackground,
} from 'react-native';

export default class C3Image extends Component{
    static propTypes = {
        borderRadius:number,
        source: object.isRequired,
        placeholderSource: object,
        placeholderErrorSource: object,
    };

    static defaultProps = {
        borderRadius:0,
        placeholderSource: {uri:'https://www.easyicon.net/api/resizeApi.php?id=1195968&size=128'},
        placeholderErrorSource: {uri:'https://www.easyicon.net/api/resizeApi.php?id=1200633&size=128'},
    };

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            isError: false,
        };
    }

    onLoadEnd() {
        this.setState({
            isLoaded: true
        });
    }


    onError() {
        this.setState({
            isError: true
        });
    }

    render() {
        if (this.props.source.uri || this.props.source.uri !== '') {
            return(
                <ImageBackground
                    onLoadEnd={() => this.onLoadEnd()}
                    onError={() => this.onError()}
                    style={this.props.style}
                    source={this.props.source}
                    {...this.props}
                >
                    {
                        this.state.isLoaded ?
                            this.state.isError ?
                                <Image
                                    borderRadius={this.props.borderRadius}
                                    style={this.props.style}
                                    source={ this.props.placeholderErrorSource}
                                /> :
                                null
                            :
                            <Image
                                borderRadius={this.props.borderRadius}
                                style={this.props.style}
                                source={this.props.placeholderSource}
                            />
                    }
                </ImageBackground>
            )
        } else {
            return (
                <Image
                    style={this.props.style}
                    source={ this.props.placeholderSource}
                />
            );
        }

    }
}