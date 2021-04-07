import React from 'react'
import PersonCard from '../personCard'

const PeopleList = ({data}:{data: string}) => {
    const _data: any = JSON.parse(data)

    return (
        <section className="w-screen flex items-center flex-col pt-7 bg-darkBackground ">
            <div>

            </div>
            <div className="w-2/3 h-full flex flex-wrap">
                {_data.data.results.map((person: any) => {
                    return        <PersonCard key={person.name} {...person}/>}
                )}
            </div> 
        </section>
    )
}

export default PeopleList
