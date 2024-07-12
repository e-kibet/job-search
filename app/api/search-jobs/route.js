
import { NextResponse } from "next/server";
const apiKey = process.env.X_RAPID_API_KEY

const dataset = {
    data: [
        {
            "company": "Microsoft",
            "company_linkedin_url": "https://www.linkedin.com/company/microsoft",
            "company_logo": "https://media.licdn.com/dms/image/C560BAQE88xCsONDULQ/company-logo_200_200/0/1630652622688/microsoft_logo?e=1729123200&v=beta&t=iYLoX7WlZM2iOLZt6xIf6wYXiYTsMqXmw5q2ZWEJRpc",
            "job_title": "Marketing: Internships Opportunities",
            "job_url": "https://www.linkedin.com/jobs/view/3966882134",
            "job_urn": "3966882134",
            "location": "Riyadh, Riyadh, Saudi Arabia",
            "posted_time": "2024-07-08 09:56:02",
            "remote": "Hybrid",
            "salary": ""
        },
        {
            "company": "Microsoft",
            "company_linkedin_url": "https://www.linkedin.com/company/microsoft",
            "company_logo": "https://media.licdn.com/dms/image/C560BAQE88xCsONDULQ/company-logo_200_200/0/1630652622688/microsoft_logo?e=1729123200&v=beta&t=iYLoX7WlZM2iOLZt6xIf6wYXiYTsMqXmw5q2ZWEJRpc",
            "job_title": "Field Integrated Marketing: Internship Opportunities",
            "job_url": "https://www.linkedin.com/jobs/view/3972080221",
            "job_urn": "3972080221",
            "location": "Prague, Prague, Czechia",
            "posted_time": "2024-07-10 15:19:03",
            "remote": "Hybrid",
            "salary": ""
        },
        {
            "company": "Microsoft",
            "company_linkedin_url": "https://www.linkedin.com/company/microsoft",
            "company_logo": "https://media.licdn.com/dms/image/C560BAQE88xCsONDULQ/company-logo_200_200/0/1630652622688/microsoft_logo?e=1729123200&v=beta&t=iYLoX7WlZM2iOLZt6xIf6wYXiYTsMqXmw5q2ZWEJRpc",
            "job_title": "Product Marketing Manager, Microsoft Education",
            "job_url": "https://www.linkedin.com/jobs/view/3964406976",
            "job_urn": "3964406976",
            "location": "California, United States",
            "posted_time": "2024-07-03 21:18:00",
            "remote": "Remote",
            "salary": "$83.4K/yr - $183K/yr"
        },
        {
            "company": "Microsoft",
            "company_linkedin_url": "https://www.linkedin.com/company/microsoft",
            "company_logo": "https://media.licdn.com/dms/image/C560BAQE88xCsONDULQ/company-logo_200_200/0/1630652622688/microsoft_logo?e=1729123200&v=beta&t=iYLoX7WlZM2iOLZt6xIf6wYXiYTsMqXmw5q2ZWEJRpc",
            "job_title": "Senior Integrated Marketing Communications Manager",
            "job_url": "https://www.linkedin.com/jobs/view/3974094681",
            "job_urn": "3974094681",
            "location": "California, United States",
            "posted_time": "2024-07-12 05:21:50",
            "remote": "Remote",
            "salary": "$103.8K/yr - $219.2K/yr"
        },
        {
            "company": "Microsoft",
            "company_linkedin_url": "https://www.linkedin.com/company/microsoft",
            "company_logo": "https://media.licdn.com/dms/image/C560BAQE88xCsONDULQ/company-logo_200_200/0/1630652622688/microsoft_logo?e=1729123200&v=beta&t=iYLoX7WlZM2iOLZt6xIf6wYXiYTsMqXmw5q2ZWEJRpc",
            "job_title": "Digital Account Executive",
            "job_url": "https://www.linkedin.com/jobs/view/3961955383",
            "job_urn": "3961955383",
            "location": "Taipei, Taipei City, Taiwan",
            "posted_time": "2024-07-02 05:19:24",
            "remote": "Hybrid",
            "salary": ""
        },
        {
            "company": "Microsoft",
            "company_linkedin_url": "https://www.linkedin.com/company/microsoft",
            "company_logo": "https://media.licdn.com/dms/image/C560BAQE88xCsONDULQ/company-logo_200_200/0/1630652622688/microsoft_logo?e=1729123200&v=beta&t=iYLoX7WlZM2iOLZt6xIf6wYXiYTsMqXmw5q2ZWEJRpc",
            "job_title": "Senior Product Marketing Manager, Microsoft Education",
            "job_url": "https://www.linkedin.com/jobs/view/3964413035",
            "job_urn": "3964413035",
            "location": "California, United States",
            "posted_time": "2024-07-03 21:17:59",
            "remote": "Remote",
            "salary": "$103.8K/yr - $219.2K/yr"
        },
        {
            "company": "Microsoft",
            "company_linkedin_url": "https://www.linkedin.com/company/microsoft",
            "company_logo": "https://media.licdn.com/dms/image/C560BAQE88xCsONDULQ/company-logo_200_200/0/1630652622688/microsoft_logo?e=1729123200&v=beta&t=iYLoX7WlZM2iOLZt6xIf6wYXiYTsMqXmw5q2ZWEJRpc",
            "job_title": "Director of Brand Strategy",
            "job_url": "https://www.linkedin.com/jobs/view/3963319944",
            "job_urn": "3963319944",
            "location": "California, United States",
            "posted_time": "2024-07-02 21:16:56",
            "remote": "Remote",
            "salary": "$129.2K/yr - $268.9K/yr"
        },
        {
            "company": "Microsoft",
            "company_linkedin_url": "https://www.linkedin.com/company/microsoft",
            "company_logo": "https://media.licdn.com/dms/image/C560BAQE88xCsONDULQ/company-logo_200_200/0/1630652622688/microsoft_logo?e=1729123200&v=beta&t=iYLoX7WlZM2iOLZt6xIf6wYXiYTsMqXmw5q2ZWEJRpc",
            "job_title": "GCR Field Integrated Marketing Lead",
            "job_url": "https://www.linkedin.com/jobs/view/3958868879",
            "job_urn": "3958868879",
            "location": "Shanghai, Shanghai, China",
            "posted_time": "2024-06-25 11:18:09",
            "remote": "Hybrid",
            "salary": ""
        },
        {
            "company": "Microsoft",
            "company_linkedin_url": "https://www.linkedin.com/company/microsoft",
            "company_logo": "https://media.licdn.com/dms/image/C560BAQE88xCsONDULQ/company-logo_200_200/0/1630652622688/microsoft_logo?e=1729123200&v=beta&t=iYLoX7WlZM2iOLZt6xIf6wYXiYTsMqXmw5q2ZWEJRpc",
            "job_title": "Field Product Marketing",
            "job_url": "https://www.linkedin.com/jobs/view/3971206256",
            "job_urn": "3971206256",
            "location": "Region of Southern Denmark, Denmark",
            "posted_time": "2024-07-09 15:17:38",
            "remote": "Hybrid",
            "salary": ""
        },
        {
            "company": "Microsoft",
            "company_linkedin_url": "https://www.linkedin.com/company/microsoft",
            "company_logo": "https://media.licdn.com/dms/image/C560BAQE88xCsONDULQ/company-logo_200_200/0/1630652622688/microsoft_logo?e=1729123200&v=beta&t=iYLoX7WlZM2iOLZt6xIf6wYXiYTsMqXmw5q2ZWEJRpc",
            "job_title": "PARTNER MARKETING MANAGER – Japan (DEVICE & CREATIVITY CSA)",
            "job_url": "https://www.linkedin.com/jobs/view/3940342772",
            "job_urn": "3940342772",
            "location": "Tokyo, Tokyo, Japan",
            "posted_time": "2024-06-27 11:33:04",
            "remote": "Hybrid",
            "salary": ""
        },
        {
            "company": "Microsoft",
            "company_linkedin_url": "https://www.linkedin.com/company/microsoft",
            "company_logo": "https://media.licdn.com/dms/image/C560BAQE88xCsONDULQ/company-logo_200_200/0/1630652622688/microsoft_logo?e=1729123200&v=beta&t=iYLoX7WlZM2iOLZt6xIf6wYXiYTsMqXmw5q2ZWEJRpc",
            "job_title": "PARTNER MARKETING MANAGER Ecommerce (DEVICES & CREATIVITY CSA)",
            "job_url": "https://www.linkedin.com/jobs/view/3921630010",
            "job_urn": "3921630010",
            "location": "Shanghai, Shanghai, China",
            "posted_time": "2024-06-27 10:29:15",
            "remote": "Hybrid",
            "salary": ""
        },
        {
            "company": "Microsoft",
            "company_linkedin_url": "https://www.linkedin.com/company/microsoft",
            "company_logo": "https://media.licdn.com/dms/image/C560BAQE88xCsONDULQ/company-logo_200_200/0/1630652622688/microsoft_logo?e=1729123200&v=beta&t=iYLoX7WlZM2iOLZt6xIf6wYXiYTsMqXmw5q2ZWEJRpc",
            "job_title": "Senior Product Marketing Manager",
            "job_url": "https://www.linkedin.com/jobs/view/3961950850",
            "job_urn": "3961950850",
            "location": "California, United States",
            "posted_time": "2024-07-02 05:19:24",
            "remote": "Remote",
            "salary": "$103.8K/yr - $219.2K/yr"
        },
        {
            "company": "Microsoft",
            "company_linkedin_url": "https://www.linkedin.com/company/microsoft",
            "company_logo": "https://media.licdn.com/dms/image/C560BAQE88xCsONDULQ/company-logo_200_200/0/1630652622688/microsoft_logo?e=1729123200&v=beta&t=iYLoX7WlZM2iOLZt6xIf6wYXiYTsMqXmw5q2ZWEJRpc",
            "job_title": "Digital Account Executive, UK Market",
            "job_url": "https://www.linkedin.com/jobs/view/3965476850",
            "job_urn": "3965476850",
            "location": "Dublin, County Dublin, Ireland",
            "posted_time": "2024-07-05 21:17:23",
            "remote": "Hybrid",
            "salary": ""
        },
        {
            "company": "Microsoft",
            "company_linkedin_url": "https://www.linkedin.com/company/microsoft",
            "company_logo": "https://media.licdn.com/dms/image/C560BAQE88xCsONDULQ/company-logo_200_200/0/1630652622688/microsoft_logo?e=1729123200&v=beta&t=iYLoX7WlZM2iOLZt6xIf6wYXiYTsMqXmw5q2ZWEJRpc",
            "job_title": "Product Marketing Manager, Business Applications Partner Marketing",
            "job_url": "https://www.linkedin.com/jobs/view/3959975917",
            "job_urn": "3959975917",
            "location": "South Dakota, United States",
            "posted_time": "2024-06-28 03:18:49",
            "remote": "Remote",
            "salary": "$103.8K/yr - $219.2K/yr"
        },
        {
            "company": "Microsoft",
            "company_linkedin_url": "https://www.linkedin.com/company/microsoft",
            "company_logo": "https://media.licdn.com/dms/image/C560BAQE88xCsONDULQ/company-logo_200_200/0/1630652622688/microsoft_logo?e=1729123200&v=beta&t=iYLoX7WlZM2iOLZt6xIf6wYXiYTsMqXmw5q2ZWEJRpc",
            "job_title": "Digital Sales Manager, UK Market (Ireland based)",
            "job_url": "https://www.linkedin.com/jobs/view/3965479525",
            "job_urn": "3965479525",
            "location": "Dublin, County Dublin, Ireland",
            "posted_time": "2024-07-05 21:17:26",
            "remote": "Hybrid",
            "salary": ""
        },
        {
            "company": "Microsoft",
            "company_linkedin_url": "https://www.linkedin.com/company/microsoft",
            "company_logo": "https://media.licdn.com/dms/image/C560BAQE88xCsONDULQ/company-logo_200_200/0/1630652622688/microsoft_logo?e=1729123200&v=beta&t=iYLoX7WlZM2iOLZt6xIf6wYXiYTsMqXmw5q2ZWEJRpc",
            "job_title": "Marketing Manager (contract)",
            "job_url": "https://www.linkedin.com/jobs/view/3972069144",
            "job_urn": "3972069144",
            "location": "Redmond, WA",
            "posted_time": "2024-07-10 14:40:24",
            "remote": "Remote",
            "salary": "$34/hr - $38.50/hr"
        },
        {
            "company": "Microsoft",
            "company_linkedin_url": "https://www.linkedin.com/company/microsoft",
            "company_logo": "https://media.licdn.com/dms/image/C560BAQE88xCsONDULQ/company-logo_200_200/0/1630652622688/microsoft_logo?e=1729123200&v=beta&t=iYLoX7WlZM2iOLZt6xIf6wYXiYTsMqXmw5q2ZWEJRpc",
            "job_title": "Account Executive-Digital Sales and Solutions",
            "job_url": "https://www.linkedin.com/jobs/view/3959558033",
            "job_urn": "3959558033",
            "location": "San José, San Jose, Costa Rica",
            "posted_time": "2024-06-27 00:20:55",
            "remote": "Hybrid",
            "salary": ""
        },
        {
            "company": "Microsoft",
            "company_linkedin_url": "https://www.linkedin.com/company/microsoft",
            "company_logo": "https://media.licdn.com/dms/image/C560BAQE88xCsONDULQ/company-logo_200_200/0/1630652622688/microsoft_logo?e=1729123200&v=beta&t=iYLoX7WlZM2iOLZt6xIf6wYXiYTsMqXmw5q2ZWEJRpc",
            "job_title": "Director, Marketing, Public Affairs",
            "job_url": "https://www.linkedin.com/jobs/view/3971505150",
            "job_urn": "3971505150",
            "location": "Redmond, WA",
            "posted_time": "2024-07-09 21:24:06",
            "remote": "Hybrid",
            "salary": "$129.2K/yr - $268.9K/yr"
        },
        {
            "company": "Microsoft",
            "company_linkedin_url": "https://www.linkedin.com/company/microsoft",
            "company_logo": "https://media.licdn.com/dms/image/C560BAQE88xCsONDULQ/company-logo_200_200/0/1630652622688/microsoft_logo?e=1729123200&v=beta&t=iYLoX7WlZM2iOLZt6xIf6wYXiYTsMqXmw5q2ZWEJRpc",
            "job_title": "Senior Account Executive (SMC and Digital Sales)",
            "job_url": "https://www.linkedin.com/jobs/view/3962922008",
            "job_urn": "3962922008",
            "location": "Seoul Incheon Metropolitan Area",
            "posted_time": "2024-07-02 09:17:32",
            "remote": "Hybrid",
            "salary": ""
        },
        {
            "company": "Microsoft",
            "company_linkedin_url": "https://www.linkedin.com/company/microsoft",
            "company_logo": "https://media.licdn.com/dms/image/C560BAQE88xCsONDULQ/company-logo_200_200/0/1630652622688/microsoft_logo?e=1729123200&v=beta&t=iYLoX7WlZM2iOLZt6xIf6wYXiYTsMqXmw5q2ZWEJRpc",
            "job_title": "Xbox Category Management - Console (Japan)",
            "job_url": "https://www.linkedin.com/jobs/view/3961126913",
            "job_urn": "3961126913",
            "location": "Tokyo, Tokyo, Japan",
            "posted_time": "2024-07-01 05:18:30",
            "remote": "Hybrid",
            "salary": ""
        },
        {
            "company": "Microsoft",
            "company_linkedin_url": "https://www.linkedin.com/company/microsoft",
            "company_logo": "https://media.licdn.com/dms/image/C560BAQE88xCsONDULQ/company-logo_200_200/0/1630652622688/microsoft_logo?e=1729123200&v=beta&t=iYLoX7WlZM2iOLZt6xIf6wYXiYTsMqXmw5q2ZWEJRpc",
            "job_title": "Strategic Account Technology Strategist  - Banking and Capital Markets",
            "job_url": "https://www.linkedin.com/jobs/view/3945505148",
            "job_urn": "3945505148",
            "location": "Tokyo, Tokyo, Japan",
            "posted_time": "2024-07-04 12:45:51",
            "remote": "Hybrid",
            "salary": ""
        },
        {
            "company": "Microsoft",
            "company_linkedin_url": "https://www.linkedin.com/company/microsoft",
            "company_logo": "https://media.licdn.com/dms/image/C560BAQE88xCsONDULQ/company-logo_200_200/0/1630652622688/microsoft_logo?e=1729123200&v=beta&t=iYLoX7WlZM2iOLZt6xIf6wYXiYTsMqXmw5q2ZWEJRpc",
            "job_title": "Sales Manager - Media & AdTech Solutions",
            "job_url": "https://www.linkedin.com/jobs/view/3973575339",
            "job_urn": "3973575339",
            "location": "New York, NY",
            "posted_time": "2024-07-11 21:21:45",
            "remote": "Hybrid",
            "salary": "$130K/yr - $237.5K/yr"
        },
        {
            "company": "Microsoft",
            "company_linkedin_url": "https://www.linkedin.com/company/microsoft",
            "company_logo": "https://media.licdn.com/dms/image/C560BAQE88xCsONDULQ/company-logo_200_200/0/1630652622688/microsoft_logo?e=1729123200&v=beta&t=iYLoX7WlZM2iOLZt6xIf6wYXiYTsMqXmw5q2ZWEJRpc",
            "job_title": "Partner Strategy & Program Marketing Manager (contract)",
            "job_url": "https://www.linkedin.com/jobs/view/3972005537",
            "job_urn": "3972005537",
            "location": "Redmond, WA",
            "posted_time": "2024-07-10 08:40:23",
            "remote": "Hybrid",
            "salary": "$41/hr - $46.50/hr"
        },
        {
            "company": "Microsoft",
            "company_linkedin_url": "https://www.linkedin.com/company/microsoft",
            "company_logo": "https://media.licdn.com/dms/image/C560BAQE88xCsONDULQ/company-logo_200_200/0/1630652622688/microsoft_logo?e=1729123200&v=beta&t=iYLoX7WlZM2iOLZt6xIf6wYXiYTsMqXmw5q2ZWEJRpc",
            "job_title": "Sales Manager, Digital Sales for Enterprise - Microsoft Unified Support Solutions - French Speaker",
            "job_url": "https://www.linkedin.com/jobs/view/3941307587",
            "job_urn": "3941307587",
            "location": "Issy-les-Moulineaux, Île-de-France, France",
            "posted_time": "2024-06-28 12:44:23",
            "remote": "Hybrid",
            "salary": ""
        },
        {
            "company": "Microsoft",
            "company_linkedin_url": "https://www.linkedin.com/company/microsoft",
            "company_logo": "https://media.licdn.com/dms/image/C560BAQE88xCsONDULQ/company-logo_200_200/0/1630652622688/microsoft_logo?e=1729123200&v=beta&t=iYLoX7WlZM2iOLZt6xIf6wYXiYTsMqXmw5q2ZWEJRpc",
            "job_title": "Senior Director, Developer Audience Marketing",
            "job_url": "https://www.linkedin.com/jobs/view/3963319919",
            "job_urn": "3963319919",
            "location": "Redmond, WA",
            "posted_time": "2024-07-02 21:16:58",
            "remote": "Hybrid",
            "salary": "$154.5K/yr - $299.4K/yr"
        }
    ],
    "message": "ok",
    "total": 293
}

export async function GET(request) {
    try {
        const url = new URL(request.url)
        const searchParams = new URLSearchParams(url.search)

        const response = await fetch("https://fresh-linkedin-profile-data.p.rapidapi.com/search-jobs", {
            method: "POST",
            headers: {
                'x-rapidapi-host': 'fresh-linkedin-profile-data.p.rapidapi.com',
                'Content-Type': 'application/json',
                "x-rapidapi-key": apiKey

            },
            body: JSON.stringify({
                keywords: 'software engineer',
                geo_code: 92000000,
                date_posted: 'Any time',
                experience_levels: [],
                company_ids: [1035],
                title_ids: [],
                onsite_remotes: [],
                functions: [],
                industries: [],
                job_types: [],
                sort_by: 'Most relevant',
                easy_apply: 'false',
                under_10_applicants: 'false',
                start: 0
            }),
        });

        if (!response.ok) {
            console.error(`HTTP error! status:`, response.status + " " + response.statusText);
            return NextResponse.json({ status: false, data: dataset.data }, { status: 200, })
        } else {
            const newsResponse = await response.json();

            return NextResponse.json({ status: true, data: newsResponse.data })
        }

    } catch (e) {
        console.error(e)
        return NextResponse.json({ status: false, message: 'Something went wrong. Please try again later' }, { status: 500, })
    }
}