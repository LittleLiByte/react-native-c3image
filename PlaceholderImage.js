/**
 * Created by littlebyte on 2017/5/27.
 */
import React, {Component, PropTypes} from 'react';
import {View, Image, Animated} from 'react-native';

class PlaceholderImage extends Component {
    static propTypes = {
        source: PropTypes.object.isRequired,
        placeholderSource: PropTypes.number,
        placeholderErrorSource: PropTypes.object,
        placeholderStyle: View.propTypes.style,
        placeholderResizeMode: PropTypes.string,

    };

    static defaultProps = {
        placeholderResizeMode: 'contain',
        placeholderStyle: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
    };

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            isError: false,
            opacity: new Animated.Value(0)
        };
    }

    onLoadEnd() {
        this.setState({
            isLoaded: true
        });
    }

    onLoad(){
        Animated.timing(this.state.opacity,{
            toValue: 0,
            duration : 100
        }).start()
    }

    onError() {
        this.setState({
            isError: true
        });
    }

    render() {
        return (
            <Animated.Image
                onLoad = {(event)=>this.onLoad()}
                onLoadEnd={() => this.onLoadEnd()}
                onError={() => this.onError()}
                style={[{alignItems: 'center'}, this.props.style,]}
                source={this.props.source}
                resizeMode={this.props.resizeMode}
            >
                {
                    this.state.isLoaded ?
                        this.state.isError ?
                            <Image
                                resizeMode={this.props.placeholderResizeMode}
                                style={[this.props.placeholderStyle, this.props.style]}
                                source={this.props.placeholderSource ? this.props.placeholderErrorSource : require('../img/icon_failure.png')}
                            /> :
                            null
                        :
                        <Image
                            resizeMode={this.props.placeholderResizeMode}
                            style={[this.props.placeholderStyle, this.props.style]}
                            source={this.props.placeholderSource ? this.props.placeholderSource : require('../img/banner_logo_default@2x.png')}
                        />
                }
            </Animated.Image>
        );
    }
}

export default PlaceholderImage;
