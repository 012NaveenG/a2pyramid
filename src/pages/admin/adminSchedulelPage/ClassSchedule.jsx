import Schedule from './Schedules.jsx';
import { getSession } from '../../../api/users.js';

const ClassSchedule = () => {
  const user = getSession();

  return (
    <div className="min-h-screen p-4 mt-10">
      <Schedule role={user.role} userClass={user.class} teacherName={user.username} />
    </div>
  );
};

export default ClassSchedule;
