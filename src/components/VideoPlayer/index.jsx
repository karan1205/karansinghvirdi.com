import React, {Component} from 'react';
import 'mediaelement';
import hlsjs from 'hls.js';
import 'mediaelement/build/mediaelementplayer.min.css';

export class VideoPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const props = this.props;
        const mediaHtml =
            `<video id="${props.id}"
                    src="${props.srcUrl}"
                    poster="${props.posterSrcUrl}"
                    class="${props.styleClass}"
                    width="${props.width}"
                    height="${props.height}"
                    controls="${props.controls}"
                >
            </video>`
        return (
            <div dangerouslySetInnerHTML={{ __html: mediaHtml }}></div>
        );
    }

    componentDidMount() {
        const {MediaElementPlayer} = global;

        if(!MediaElementPlayer) return;

        const options = {
            stretching: this.props.stretching,
        }
        window.Hls = hlsjs;

        this.setState({
            player: new MediaElementPlayer(this.props.id, options)
        });
    }

    componentWillUnmount() {
        if(this.state.player) {
            this.state.player.remove();
            this.setState({
                player: null
            });
        }
    }
}