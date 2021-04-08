import React from 'react'

const PersonCard = (person: { name: string, image: string, status: string, species: string, gender: string, origin: any, location: any, episode: any[] }) => {
    const { name, image, status, species, gender, origin, location } = person
    const infoPerson = [
        { label: 'STATUS', value: status },
        { label: 'SPECIES', value: species },
        { label: 'GENDER', value: gender },
        { label: 'ORIGIN', value: origin.name },
        { label: 'LAST LOCATION', value: location.name },
    ]

    return (
        <div className="w-1/3 px-10 person  mb-normal">
        <div className="bg-CardBackground h-full rounded-md pb-normal shadow">
            <div className="relative ">
                <img className="w-full rounded-t" alt={name} src={image} style={{height: 280}} />
                <div className="absolute bottom-0 left-0 w-full bg-darkBackground bg-opacity-50 text-white py-2 pl-2">
                    <p>{name}</p>
                </div>
            </div>
            <div className=" h-2/3 px-10">
                {infoPerson.map(info => (
                    <div className="flex justify-between border-b border-lightTexts py-1 first:pt-8 last:border-0">
                        <p className="text-lightTexts text-sm">{info.label}</p>
                        <p className="text-orangeTexts text-sm text-wrap text-right">{info.value}</p>
                    </div>
                ))}
            </div>
        </div>
        </div>
    )
}

export default PersonCard
