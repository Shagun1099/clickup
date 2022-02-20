import flag1 from '../assets/flag-1.png';
import flag2 from '../assets/flag-2.png';
import flag3 from '../assets/flag-3.png';
import flag4 from '../assets/flag-4.png';
import flag5 from '../assets/flag-5.png';
import flag6 from '../assets/flag-6.png';
import user1 from '../assets/users/user-1.jpg';
import user2 from '../assets/users/user-2.jpg';
import user3 from '../assets/users/user-3.jpg';
import user4 from '../assets/users/user-4.jpg';
import user5 from '../assets/users/user-5.jpg';
import user6 from '../assets/users/user-6.jpg';
import user7 from '../assets/users/user-7.jpg';


export const DASHBOARD = {
    TRAFFIC: {
        datasets: [
            [1, -56, 8, -16, 34, 5, 40, 6, -25, -65, -7, -51, 35, 0, -25, 35, 0, 20, -27, 19, 0, -12, 35],
            [31, 56, 32, -10, -20, 10, 56, 48, 62, -3, 0, -25, 48, 20, 56, 23, 52, 34, -16, -13, 56, 59]
        ],
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep"],
        lineColors: ["green", "blue"],
    },
    DATA: [
        {
            username: "Theobold Marshall",
            isNew: true,
            image: user1,
            registeredOn: "Jan 1,2021",
            countryFlag: flag1,
            usage: 50,
            usageRange: "Jun 11,2021 - Jul 12,2021",
            paymanetMethod: "visa",
            lastLogin: "1 hour ago"
        },
        {
            username: "Ruby Gross",
            isNew: false,
            image: user2,
            registeredOn: "Jan 22,2021",
            countryFlag: flag2,
            usage: 20,
            usageRange: "Jun 11,2021 - Aug 12,2021",
            paymanetMethod: "mastercard",
            lastLogin: "5 min ago"
        },
        {
            username: "Andrew Castro",
            isNew: true,
            image: user3,
            registeredOn: "Jan 2,2021",
            countryFlag: flag3,
            usage: 60,
            usageRange: "Mar 11,2021 - Jul 12,2021",
            paymanetMethod: "visa",
            lastLogin: "2 hour ago"
        },
        {
            username: "Camelia Richards",
            isNew: true,
            image: user4,
            registeredOn: "Feb 1,2021",
            countryFlag: flag4,
            usage: 50,
            usageRange: "Jun 11,2021 - Jul 12,2021",
            paymanetMethod: "visa",
            lastLogin: "1 hour ago"
        },
        {
            username: "Thalia Pope",
            isNew: true,
            image: user5,
            registeredOn: "Mar 1,2021",
            countryFlag: flag5,
            usage: 20,
            usageRange: "Apr 11,2021 - Jul 12,2021",
            paymanetMethod: "mastercard",
            lastLogin: "5 hour ago"
        },
        {
            username: "Earnest Schmitt",
            isNew: true,
            image: user5,
            registeredOn: "Jan 1,2021",
            countryFlag: flag6,
            usage: 50,
            usageRange: "Jan 15,2021 - Jul 12,2021",
            paymanetMethod: "visa",
            lastLogin: "10 mins ago"
        },
        {
            username: "Sidney Wiggins",
            isNew: true,
            image: user6,
            registeredOn: "Jan 1,2021",
            countryFlag: flag1,
            usage: 90,
            usageRange: "Jun 11,2021 - Jul 12,2021",
            paymanetMethod: "visa",
            lastLogin: "10 hour ago"
        },
        {
            username: "William Doherty",
            isNew: true,
            image: user7,
            registeredOn: "Jan 1,2021",
            countryFlag: flag3,
            usage: 50,
            usageRange: "Jan 15,2021 - Jul 12,2021",
            paymanetMethod: "visa",
            lastLogin: "10 mins ago"
        },
        {
            username: "Patrick Daly",
            isNew: false,
            image: user1,
            registeredOn: "Jan 1,2021",
            countryFlag: flag2,
            usage: 90,
            usageRange: "Jun 11,2021 - Jul 12,2021",
            paymanetMethod: "mastercard",
            lastLogin: "6 hour ago"
        }
    ]
}

export const PROJECT_RELEASE = {
    projects: [
        {
            stage: "Stage 1",
            task: "Update the contractor agreement",
            image: user1,
            flag: "info",
            status: "ready"
        },
        {
            stage: "Stage 2",
            task: "Refresh compnay website",
            image: user2,
            flag: "success",
            status: "ready"
        },
        {
            stage: "Stage 1",
            task: "Plan for next year",
            image: user3,
            flag: "error",
            status: "in_progress"
        },
        {
            stage: "Stage 1",
            task: "How to manage event planning",
            image: user4,
            flag: "success",
            status: "in_progress"
        }, {
            stage: "Stage 1",
            task: "Budget Assesment",
            image: user5,
            flag: "info",
            status: "in_progress"
        }, {
            stage: "Stage 1",
            task: "Finalize project scope",
            image: user6,
            flag: "success",
            status: "review"
        }, {
            stage: "Stage 1",
            task: "Update curcial key objectives",
            image: user7,
            flag: "error",
            status: "review"
        }, {
            stage: "Stage 1",
            task: "Update the contractor agreement",
            image: user1,
            flag: "info",
            status: "review"
        },
    ]
}