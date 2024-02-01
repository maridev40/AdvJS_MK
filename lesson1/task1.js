const alboms = [
    {
        title: "Название альбома",
        artist: "Исполнитель",
        year: "Год выпуска"
    },
    {
        title: "Название альбома 2",
        artist: "Исполнитель 2",
        year: "Год выпуска 2"
    }
]

const musicCollection = {
    alboms: [...alboms],
    [Symbol.iterator]: function () {
        let countAlboms = 0;
        return {
            next: (() => {
                if (countAlboms >= this.alboms.length) {
                    return { done: true }
                } else {
                    return {
                        value: this.alboms[countAlboms++],
                        done: false
                    }
                }
            })
        }
    },
}
for (const albom of musicCollection) {
    console.log(`${albom.title} - ${albom.artist} (${albom.year})`)
}