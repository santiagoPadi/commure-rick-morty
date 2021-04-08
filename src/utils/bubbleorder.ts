export const ordering = (data: any[]): any[] => {
    let _data = data
    const length = _data.length
    for (let indexSecond = 1; indexSecond < length; indexSecond++) {
    for (let indexFirst = 0; indexFirst < (length - indexSecond); indexFirst++) {
        const episodeLengthFirst = _data[indexFirst].episode.length
        const episodeLengthSecond = _data[indexFirst + 1].episode.length
        const lastEpisodeFirst = _data[indexFirst].episode[episodeLengthFirst -1]
        const lastEpisodeSecond = _data[indexFirst +1].episode[episodeLengthSecond -1]
        let nFirst = lastEpisodeFirst.lastIndexOf("/");
        let nSecond = lastEpisodeSecond.lastIndexOf("/");
        let numberFirst = lastEpisodeFirst.substr(nFirst +1, lastEpisodeFirst.lenght);
        let numberSecond = lastEpisodeSecond.substr(nSecond +1, lastEpisodeSecond.lenght);
        if(Number(numberFirst) < Number(numberSecond)) {
            let auxiliar = _data[indexFirst]
            _data[indexFirst] = _data[indexFirst +1]
            _data[indexFirst +1] =  auxiliar
        }

    }
    }
    return _data
}