import { UserSwitchOutlined } from '@ant-design/icons/lib/icons';
import { Avatar } from 'antd';
import React from 'react';
import { DASHBOARD } from '../../helpers/app-data';
import './dashboard.css';
import visa from '../../assets/visa.png';
import mastercard from '../../assets/mastercard.png';
import LineChart from './TrafficChart';


const Dashboard = () => {

    const { TRAFFIC, DATA } = DASHBOARD;

    return (
        <div className='dasboard'>
            <div className='dashboard__chartContainer'>
                <h2>Traffic</h2>
                <b className='opacity-50'>Jan-July,2021</b>
                <LineChart height="80%" labels={TRAFFIC.labels} width="100%" lineColor="green" top="20px" lineColors={TRAFFIC.lineColors} datasets={TRAFFIC.datasets} showYGrid multiple />
            </div>
            <div className='dashboard__tableContainer'>
                <h2>Users</h2>
                <b className='opacity-50'>Jan-July,2021</b>
                <table className='dashboard__table'>
                    <thead className='dashboard__tableHead'>
                        <td><UserSwitchOutlined /></td>
                        <td>User</td>
                        <td>Country</td>
                        <td>Usage</td>
                        <td>Payment Method</td>
                        <td>Activity</td>
                    </thead>
                    <tbody className='dashboard__tableBody'>
                        {
                            DATA.map((data, index) => (
                                <tr className='dashboard__tableRow'>
                                    <td><Avatar src={data?.image} /></td>
                                    <td>
                                        <div>
                                            <p>{data?.username}</p>
                                            <p className='opacity-50'>{data?.isNew ? "new" : "recurring"}{" | Registered On"}{data?.registeredOn}</p>
                                        </div>
                                    </td>
                                    <td ><img src={data?.countryFlag} height={25} width={25} alt="flag" /></td>
                                    <td>
                                        <div>
                                            <div className='flex items-center justify-between'>
                                                <b>{data?.usage} %</b>
                                                <small className='ml-20'>{data?.usageRange}</small>
                                            </div>
                                            <div style={{ width: `${data?.usage}%`, background: data?.usage > 70 ? "red" : (data?.usage > 50 ? "#996ce8" : (data?.usage > 30 && "#ffd82d")) }} className='bar'></div>
                                        </div>
                                    </td>
                                    <td ><img src={data?.paymanetMethod === 'visa' ? visa : mastercard} alt={data?.paymanetMethod} height={25} /></td>
                                    <td>
                                        <small>Last login</small><br />
                                        <b>{data?.lastLogin}</b>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Dashboard