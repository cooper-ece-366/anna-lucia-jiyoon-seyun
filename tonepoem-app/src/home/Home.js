import React from 'react' // THIS LINE IS REQUIRED
import ReactDOM from 'react-dom'
import './Home.css'

const Home = () => {
    return (
        <div className = "Home">
            <h2>What is TONEPOEM?</h2>
            <span>A collaborative effort to create a comprehensive and well-classified database of sounds using a concise list of adjectives.</span>

            <h2>Why Does it Matter?</h2>
            <span>There are few tagged databases of sounds and of those that are documented, the tags are exclusively literal descriptions. Audio tagging is an important task to be able to predict the tags of audio clips. This is only possible with thoroughly tagged audio-database. With TonePoem, you can explore the audio space associated with words and apply to other various tasks like deep learning.</span>

            <h2>How Does it Work?</h2>
            <span>To contribute to the database of audio tags and explore the audio space, listen to a short randomly-selected audio clip and choose from the word wheel the best adjective associated with the audio. Then learn more about the source of the audio clip which will be revealed and what adjectives other users picked! Have fun!</span>

            <h2>How Can I Interact with the Data?</h2>
            <span>Have fun <i>tagging</i> audio! You can also <i>explore</i> what sounds have been associated with which adjectives. If you're intersted in <i>playing</i> with the data we collect and <i>expanding</i> on the TONEPOEM mission, all tags are made open-source as are the audio databases we pull from. Check out the Data/API tab and feel free to contact us.</span>

            <h2>What Can I Do With It?</h2>
            <span>Explore audio space in a way you never did by associating it with words! Compare your thoughts on the audio sample you tagged with how others did by looking at our distributions! Apply our open audio database for your state of the art deep learning models! And have fun!</span>
        </div>
    );
}

export default Home;