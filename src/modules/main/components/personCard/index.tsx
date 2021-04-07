import React from 'react'

const PersonCard = (anyof: any) => {
    const {name, img, status,species,gender,origin,location}:{name:string, img:string, status:string,species:string,gender:string,origin:any,location:any} = anyof
    return (
        <div className=" mx-10 mb-1 rounded personCard shadow">
<img className="w-full"  style={{height: '150px'}} alt={name} src={img} />
<p>{name}</p>
<div className="bg-CardBackground h-2/3 px-10">
     <div className="flex justify-between border-b border-lightTexts pb-1 pt-20">
        <p className="text-lightTexts">STATUS</p>
        <p  className="text-orangeTexts text-wrap">{status}</p>
    </div>
    <div className="flex justify-between border-b border-lightTexts pb-1">
        <p className="text-lightTexts">SPECIES</p>
        <p  className="text-orangeTexts text-wrap">{species}</p>
    </div>
    <div className="flex justify-between border-b border-lightTexts pb-1">
        <p className="text-lightTexts">GENDER</p>
        <p  className="text-orangeTexts text-wrap">{gender}</p>
    </div>
   <div className="flex justify-between border-b border-lightTexts pb-1">
        <p className="text-lightTexts">ORIGIN</p>
        <p  className="text-orangeTexts text-wrap">{origin.name}</p>
    </div>
    <div className="flex justify-between border-b border-lightTexts pb-1">
        <p className="text-lightTexts">lastLocation</p>
        <p  className="text-orangeTexts text-wrap">{location.name}</p>
    </div>
</div>
        </div>
    )
}

export default PersonCard
