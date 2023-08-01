import React from 'react'

export default function PropsCompnent({fakeData}) {
console.log("fakeData",fakeData);
  return (
    <>
<div>hi from props</div>
{fakeData.id}
{fakeData.title}

    </>


  )
}
