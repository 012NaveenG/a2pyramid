import { useState } from 'react';
import ExamPlanner from './ExamPlanner.jsx';
import LessionPlanner from './LessionPlanner.jsx';

const Planner = () => {
    const [lessons, setLessons] = useState([
        {
            id: 1,
            subject: "Mathematics",
            class: "Class 6A",
            topic: "Algebra - Basic Operations",
            date: "2025-07-03",
            time: "10:30 AM",
            status: "Completed",
        },
        {
            id: 2,
            subject: "Science",
            class: "Class 6B",
            topic: "Electricity and Circuits",
            date: "2025-07-04",
            time: "11:30 AM",
            status: "Pending",
        },
        {
            id: 3,
            subject: "English",
            class: "Class 7A",
            topic: "Grammar - Tenses",
            date: "2025-07-05",
            time: "09:00 AM",
            status: "Completed",
        },
        {
            id: 4,
            subject: "Computer",
            class: "Class 8A",
            topic: "Basics of Programming",
            date: "2025-07-06",
            time: "12:00 PM",
            status: "Pending",
        },
        {
            id: 5,
            subject: "Hindi",
            class: "Class 6B",
            topic: "Vyakaran",
            date: "2025-07-07",
            time: "09:30 AM",
            status: "Completed",
        },
        {
            id: 6,
            subject: "Science",
            class: "Class 9A",
            topic: "Atoms and Molecules",
            date: "2025-07-08",
            time: "11:00 AM",
            status: "Pending",
        },
    ]);


    const [exams, setExams] = useState([
        {
            id: 1,
            exam: "Unit Test 1",
            subject: "Mathematics",
            class: "Class 6A",
            topic: "Algebra Basics",
            date: "2025-07-04",
            time: "10:30 AM"
        },
        {
            id: 2,
            exam: "Science Quiz",
            subject: "Science",
            class: "Class 6B",
            topic: "Photosynthesis",
            date: "2025-07-06",
            time: "11:00 AM"
        },
        {
            id: 3,
            exam: "English Grammar Test",
            subject: "English",
            class: "Class 7A",
            topic: "Tenses & Articles",
            date: "2025-07-08",
            time: "09:00 AM"
        },
        {
            id: 4,
            exam: "History Mid-Term",
            subject: "History",
            class: "Class 8B",
            topic: "World War II",
            date: "2025-07-10",
            time: "12:00 PM"
        },
        {
            id: 5,
            exam: "Chemistry Practical",
            subject: "Chemistry",
            class: "Class 9A",
            topic: "Acids & Bases",
            date: "2025-07-12",
            time: "01:00 PM"
        },
        {
            id: 6,
            exam: "Biology Test",
            subject: "Biology",
            class: "Class 10B",
            topic: "Human Anatomy",
            date: "2025-07-14",
            time: "11:30 AM"
        },
        {
            id: 7,
            exam: "Physics Quiz",
            subject: "Physics",
            class: "Class 10A",
            topic: "Laws of Motion",
            date: "2025-07-15",
            time: "10:00 AM"
        },
        {
            id: 8,
            exam: "Computer Science Assessment",
            subject: "Computer Science",
            class: "Class 9B",
            topic: "Basics of Programming",
            date: "2025-07-16",
            time: "02:00 PM"
        }
    ]);



    const handleDeleteExam = (id) => {
        setExams(exams.filter((exam) => exam.id !== id))
    }
    const handleDeleteLesson = (id) => {
        setLessons(lessons.filter((les) => les.id !== id))
    }

    const handleEditExam = (updatedData) => {
        setExams(exams.map((exam) => exam.id === updatedData.id ? { ...exam, ...updatedData } : exam))
    }
    const handleEditLesson = (updatedData) => {
        setLessons(lessons.map((lesson) =>
            lesson.id === updatedData.id ? { ...lesson, ...updatedData } : lesson
        ));
    };


    return (
        <div className='p-4 mt-5'>

            {/* Lesson Plan Section */}
            <div className="mb-8">

                <LessionPlanner lessons={lessons} handleEditLesson={handleEditLesson} handleDelete={handleDeleteLesson} />
            </div>

            {/* Exam Plan Section */}
            <div>
                <ExamPlanner exams={exams} handleDelete={handleDeleteExam} handleEditExam={handleEditExam} />
            </div>
        </div>
    );
};

export default Planner;
