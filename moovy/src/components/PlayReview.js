import React, { Component } from "react";
import { Howl } from 'howler';

const audioClip = "http://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a";



class PlayReview extends Component{
    soundPlay = (src) => {
        const sound = new Howl ({
            src,
            html5: true
        })
        sound.play();
    }
    
    
    render(){
        const reviews = this.props.reviews; 
        const isReview = this.props.isReview;
        if (isReview) {
            return(  
                <>
                    <div className="review" onClick={() => this.soundPlay(audioClip)}><span className="mr-2"> 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" fill="white">
                <polygon className="play-btn__svg" points="9.33 6.69 9.33 19.39 19.3 13.04 9.33 6.69"/>
                <path className="play-btn__svg" d="M26,13A13,13,0,1,1,13,0,13,13,0,0,1,26,13ZM13,2.18A10.89,10.89,0,1,0,23.84,13.06,10.89,10.89,0,0,0,13,2.18Z"/>
                </svg> </span></div>
                </>
            )
        }else{
            return(  
                <>
                </>
            )
        }
          
    }
        
}

//onclick={SoundPlayer.playUrl('http://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a')}

export default PlayReview;