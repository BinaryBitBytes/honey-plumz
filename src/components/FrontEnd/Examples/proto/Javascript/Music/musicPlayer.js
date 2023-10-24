function musicPlayer(){
    return(
        <embed className="music_Playlist"
        name="music_Playlist"
        src="./audio/music_J.m3u"
        width="150"
        height="90"
        loop="false"
        autostart="false"
        ></embed>
    )
}
export default musicPlayer