import { FlagFilled } from '@ant-design/icons/lib/icons';
import { Avatar } from 'antd';
import React from 'react';
import { PROJECT_RELEASE } from '../../helpers/app-data';
import './project_release.css';

const ProjectRelease = () => {

  const { projects } = PROJECT_RELEASE;
  const ready_projects = projects.filter(d => d.status === 'ready');
  const progress_projects = projects.filter(d => d?.status === 'in_progress');
  const review_projects = projects.filter(d => d.status === 'review');

  return (
    <div className='projectRelease'>
      <div className='projects__container'>
        <div className='projects__typeContainer'>
          <TypeHeaderCard title="Ready" barColor="#0080ff" count={ready_projects.length} />
          {
            ready_projects.map((d, i) => <TaskCard data={d} key={i} />)
          }
        </div>
        <div className='projects__typeContainer'>
          <TypeHeaderCard title="In Progress" barColor="#996ce8" count={progress_projects.length} />
          {
            progress_projects.map((d, i) => <TaskCard data={d} key={i} />)
          }
        </div>
        <div className='projects__typeContainer'>
          <TypeHeaderCard title="In Review" barColor="#ffd82d" count={review_projects.length} />
          {
            review_projects.map((d, i) => <TaskCard data={d} key={i} />)
          }
        </div>

      </div>
    </div>
  )
}

export default ProjectRelease

const TypeHeaderCard = ({ barColor, title, count }) => {
  return (
    <div className='project__typeCard'>
      <div style={{ background: barColor }} className='bar'></div>
      <div className='flex items-center ml-10 mt-10'>
        <b>{title}</b>
        <div className='projects__count'>{count}</div>
      </div>
    </div>
  )
}

const TaskCard = ({ data }) => {
  return <div className='task__card'>
    <div className='flex-1'>
      <small className='font-semibold c-gray'>Release Project {" > " + data?.stage}</small>
      <p className='mt-20 font-medium mr-20 '>{data?.task}</p>
      <FlagFilled style={{ color: data?.flag === "info" ? "#ffd82d" : (data.flag === "success" ? "#00dc00" : "red"), fontSize: 22 }} />
    </div>
    <Avatar src={data?.image} />
  </div>
}