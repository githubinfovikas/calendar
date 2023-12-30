import { useState } from 'react';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import Session from './Session';
import AddNewNotes from './AddNewNotes';

export default function App() {
    const [selectedDay, setSelectedDay] = useState<Date>();

    const footer = selectedDay ? (
        <p>You selected {format(selectedDay, 'PPP')}.</p>
    ) : (
        <p>Please pick a day.</p>
    );

    return (
        <div className=''>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:border-2'>
                <div className='bg-gray-200'>
                    <DayPicker
                        mode="single"
                        selected={selectedDay}
                        onSelect={setSelectedDay}
                        footer={footer}
                        styles={{
                            caption: { color: "blue" },
                            // head_cell: { padding: "20px", color: "gray"},
                            head_cell: { color: "gray" },
                            cell: { padding: "12px" }

                        }}

                    />
                </div>
                <div className=''>
                    <Session element={selectedDay} />
                    <div className='flex p-3 items-end justify-end'>
                        <AddNewNotes />
                    </div>
                </div>
            </div>

        </div>
    );
}