const NavBar = () => {


    return(
        <nav>
            <ul className="menu">
                <li><a href="/" target="_blank">Home</a></li>
                <li>
                    <a href="/javascript">Javascript</a>
                    <ul>
                        <li><a href="/javascript/background-generator" target="_blank">Background Generator</a></li>
                        <li><a href="/javascript/metronome" target="_blank">Metronome</a></li>
                        <li><a href="/javascript/pokedex" target="_blank">Pokedex</a></li>
                        <li><a href="/javascript/flag-guesser" target="_blank">Flag Guesser</a></li>
                    </ul>
                </li>
                <li>
                    <a href="/python">Python</a>
                    <ul>
                        <li><a target="_blank" href="https://github.com/RomainLando/personal_trainer_tool">Personal Trainer</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;