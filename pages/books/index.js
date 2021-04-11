import React from 'react'

export default function Book({data}) {
  //console.log(data);
    return (
        <div>
            dfasfww
        </div>
    )
}
export const getServerSideProps = async (a) => {
    const res = await fetch(`http://${a.req.headers.host}/api/books`)
    console.log(a.req);
    const data = await res.json()
  
    return {
      props: {
        data,
      },
    }
  }