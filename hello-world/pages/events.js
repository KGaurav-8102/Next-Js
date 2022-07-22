
function EventList ({ eventList }) {
    return (
        <>
            <h2>List of Events</h2>
            {
                eventList.map(event => {
                    return (
                        <div key={event.id}>
                            <h2>
                                {event.id} {event.title} {event.date} | {event.category}
                            </h2>
                            <p>{event.description}</p>
                        </div>
                    )
                })
            }
        </>
    )
}


export default EventList

export async function getServerSideProps() {
    const response = await fetch('http://localhost:4000/events')
    const data = await response.json()

    return {
        props: {
            eventList : data
        }
    }
}