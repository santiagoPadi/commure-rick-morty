export const ordering = (data: any[]): any[] => {
    let _data = data
    const ordered = _data.sort((a, b) => {
        const [episodeLengthFirst, episodeLengthSecond] = [a.episode.length, b.episode.length]
        const [lastEpisodeFirst, lastEpisodeSecond] = [a.episode[episodeLengthFirst -1],b.episode[episodeLengthSecond -1]]
        let [nFirst, nSecond] = [lastEpisodeFirst.lastIndexOf("/"), lastEpisodeSecond.lastIndexOf("/")];
        let numberFirst = lastEpisodeFirst.substr(nFirst +1, lastEpisodeFirst.lenght);
        let numberSecond = lastEpisodeSecond.substr(nSecond +1, lastEpisodeSecond.lenght);
        if(Number(numberFirst) > Number(numberSecond)) {
            return -1
        } else if(Number(numberFirst) < Number(numberSecond)) {
            return 1
        } else {
            return 0
        }
    })
    
    return ordered
}