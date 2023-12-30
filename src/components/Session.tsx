import { Link } from "react-router-dom"

const calendarData = [
    {
        date: '10/12/2023',
        schedule: [
            {
                id: 1,
                startTiming: '9:00 AM',
                endTiming: '10:00 AM',
                subjects: 'Research Methodology 1 of 4',
                professors: 'Prof Sandeep and Prof Pooja',
            },
            {
                id: 2,
                startTiming: '10:00 AM',
                endTiming: '11:00 AM',
                subjects: 'Research Methodology 2 of 4',
                professors: 'Prof Sandeep and Prof Pooja',
            },
            {
                id: 3,
                startTiming: '11:00 AM',
                endTiming: '02:00 PM',
                subjects: 'Research Methodology 3 of 4',
                professors: 'Prof Sandeep and Prof Pooja',
            },
        ],
    },
    {
        date: '11/12/2023',
        schedule: [
            {
                id: 4,
                startTiming: '9:00 AM',
                endTiming: '10:00 AM',
                subjects: 'Research Methodology 1 of 5',
                professors: 'Prof Sandeep and Prof Pooja',
            },
            {
                id: 5,
                startTiming: '10:00 AM',
                endTiming: '11:00 AM',
                subjects: 'Research Methodology 2 of 5',
                professors: 'Prof Sandeep and Prof Pooja',
            },
            {
                id: 6,
                timings: '11:00 AM - 02:00 PM',
                startTiming: '11:00 AM',
                endTiming: '02:00 AM',
                subjects: 'Research Methodology 3 of 5',
                professors: 'Prof Sandeep and Prof Pooja',
            },
            {
                id: 7,
                startTiming: '9:00 AM',
                endTiming: '10:00 AM',
                subjects: 'Research Methodology 4 of 5',
                professors: 'Prof Sandeep and Prof Pooja',
            },
            {
                id: 8,
                startTiming: '10:00 AM',
                endTiming: '11:00 AM',
                subjects: 'Research Methodology 5 of 5',
                professors: 'Prof Sandeep and Prof Pooja',
            },
            {
                id: 9,
                startTiming: '11:00 AM',
                endTiming: '02:00 PM',
                subjects: 'Research Methodology 6 of 5',
                professors: 'Prof Sandeep and Prof Pooja',
            },
        ],
    },

    {
        date: '12/12/2023',
        schedule: [
            {
                startTiming: '9:00 AM',
                endTiming: '10:00 AM',
                subjects: 'Research Methodology 1 of 6',
                professors: 'Prof Sandeep and Prof Pooja',
            },
            {
                startTiming: '10:00 AM',
                endTiming: '11:00 AM',
                subjects: 'Research Methodology 2 of 6',
                professors: 'Prof Sandeep and Prof Pooja',
            },
        ],
    },

    {
        date: '13/12/2023',
        schedule: [
            {
                startTiming: '9:00 AM',
                endTiming: '10:00 AM',
                subjects: 'Research Methodology 1 of 7',
                professors: 'Prof Sandeep and Prof Pooja',
            },
            {
                startTiming: '10:00 AM',
                endTiming: '11:00 AM',
                subjects: 'Research Methodology 2 of 7',
                professors: 'Prof Sandeep and Prof Pooja',
            },
            {
                startTiming: '11:00 AM',
                endTiming: '02:00 PM',
                subjects: 'Research Methodology 3 of 7',
                professors: 'Prof Sandeep and Prof Pooja',
            },
            {
                startTiming: '9:00 AM',
                endTiming: '10:00 AM',
                subjects: 'Research Methodology 4 of 7',
                professors: 'Prof Sandeep and Prof Pooja',
            },
        ],
    },
];

const Session = ({ element }) => {
    const selectedDate = element?.toLocaleDateString('en-GB');
    console.log(element);
    const filteredData = calendarData.find((day) => day.date === selectedDate);

    const weekday = element?.toLocaleDateString('en-GB', {
        weekday: 'long',
    })
    const date = element?.toLocaleDateString('en-GB', {
        day: 'numeric',
    })

    return (
        <div className="flex flex-col item-center justify-center">

            <div className="mb-6 my-4">
                {weekday && (
                    <div className="flex item-center justify-center">
                        <span className="font-bold text-2xl gap-2 text-orange-500">{weekday},</span>
                        <div className="text-sm font-bold pt-3 pl-1">{date}st</div>
                    </div>
                )}

            </div>
            <div>
                {filteredData ? (
                    <div className='h-96 overflow-auto '>
                        <ul>
                            {filteredData.schedule.map((event, index) => (
                                <li key={index}>

                                    <div className='flex flex-row items-center justify-around p-3 border border-gray-700'>
                                        <div className="flex flex-col items-start justify-start box-content ">
                                            <div className='font-bold'>{`${event.startTiming} - ${event.endTiming}`}</div>
                                            <div className='text-sm font-semibold text-green-500'>{event.subjects}</div>
                                            <div className='text-sm flex flex-row'>
                                                <div className='font-bold' >Faculty:</div>
                                                <div>
                                                    {event.professors}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-white">
                                            <button className='btn text-white text-sm button bg-green-400'>
                                                <Link className="text-white" to={'/session-diary'} state={event} >
                                                    Session Diary
                                                </Link >
                                            </button>

                                            

                                        </div>
                                    </div>

                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <div>
                        <div className='flex items-center h-96 justify-center'>No Any Task for selected date</div>
                    </div>

                )}
            </div>
        </div>
    );
};

export default Session;










